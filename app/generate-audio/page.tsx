"use client";

import React, { useState, useRef, useEffect } from "react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Upload, Play, Pause, Copy, Check, Download, CloudUpload, Music } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function GenerateAudioPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  // Single mode state
  const [result, setResult] = useState<any>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [s3Path, setS3Path] = useState("");

  // Bulk mode state
  const [bulkItems, setBulkItems] = useState<any[] | null>(null);
  const [bulkResults, setBulkResults] = useState<Record<number, any>>({});
  const [bulkAudio, setBulkAudio] = useState<Record<number, string>>({});
  const [processingIndex, setProcessingIndex] = useState<number | null>(null);
  const [activeJsonIndex, setActiveJsonIndex] = useState<number | null>(null);
  const [combinedJson, setCombinedJson] = useState<any[] | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const looseParse = (input: string) => {
    try {
      return JSON.parse(input);
    } catch {
      try {
        const fn = new Function("return (" + input + ")");
        return fn();
      } catch {
        return null;
      }
    }
  };

  // Check for JSON/JS Object/Array whenever text changes
  useEffect(() => {
    const parsed = looseParse(text);
    if (parsed) {
        if (Array.isArray(parsed)) {
            setBulkItems(parsed);
            setResult(null); 
            setS3Path("");
        } else if (typeof parsed === "object") {
            setBulkItems(null);
            if (parsed.audio) {
                const path = parsed.audio;
                setS3Path(path.startsWith("/") ? path.slice(1) : path);
            }
        }
    } else {
        setBulkItems(null);
    }
    setCombinedJson(null);
  }, [text]);

  const handleAudioFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
          const url = URL.createObjectURL(file);
          setAudioSrc(url);
          setResult(null);
          toast.success("Audio file loaded");
      }
  };

  // Reusable generation function
  const generateItem = async (item: any, index?: number) => {
      const actualText = (typeof item === "object" && (item.subtitle || item.text)) 
        ? (item.subtitle || item.text)
        : (typeof item === "string" ? item : JSON.stringify(item));
    
      if (!actualText) return null;

      try {
        const response = await fetch("/api/generate-audio", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: actualText }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed");

        let cleanItem = item;
        if (typeof item === "object" && item !== null) {
            const { subtitleWords, ...rest } = item;
            cleanItem = rest;
        }

        const resultObj = typeof item === "object" ? { ...cleanItem, subtitleWords: data.subtitleWords } : { contentScript: actualText, subtitleWords: data.subtitleWords };
        const audioUrl = `data:audio/mpeg;base64,${data.audio_base64}`;

        return { result: resultObj, audio: audioUrl };
      } catch (e) {
          console.error(e);
          toast.error(`Error generating for item ${index !== undefined ? index + 1 : ''}`);
          return null;
      }
  };

  const handleGenerate = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text");
      return;
    }

    setLoading(true);
    
    if (bulkItems) {
        setProcessingIndex(-1);
        const newResults = { ...bulkResults };
        const newAudio = { ...bulkAudio };

        for (let i = 0; i < bulkItems.length; i++) {
            const item = bulkItems[i];
            const content = (typeof item === "object" && (item.subtitle || item.text)) 
                ? (item.subtitle || item.text) 
                : (typeof item === "string" ? item : null);

            if (!content || !content.trim()) {
                console.log(`Skipping item ${i} (empty content)`);
                continue;
            }

            setProcessingIndex(i);
            const res = await generateItem(item, i);
            if (res) {
                newResults[i] = res.result;
                newAudio[i] = res.audio;
                setBulkResults({ ...newResults });
                setBulkAudio({ ...newAudio });
            }
        }
        
        // Prepare combined JSON
        const finalArray = bulkItems.map((item, i) => newResults[i] || item);
        setCombinedJson(finalArray);

        setProcessingIndex(null);
        toast.success("Bulk generation complete");

    } else {
        setResult(null);
        setAudioSrc(null);
        const parsedInput = looseParse(text);
        const itemToProcess = (parsedInput && typeof parsedInput === 'object') ? parsedInput : text;
        
        const res = await generateItem(itemToProcess);
        if (res) {
            setResult(res.result);
            setAudioSrc(res.audio);
            toast.success("Audio generated successfully!");
        }
    }
    setLoading(false);
  };

  const handleBulkGenerateAndUpload = async () => {
    if (!bulkItems) return;
    setLoading(true);
    setProcessingIndex(-1);
    
    const newResults = { ...bulkResults };
    const newAudio = { ...bulkAudio };
    let uploadCount = 0;

    for (let i = 0; i < bulkItems.length; i++) {
        const item = bulkItems[i];
        
        const content = (typeof item === "object" && (item.subtitle || item.text)) 
            ? (item.subtitle || item.text) 
            : (typeof item === "string" ? item : null);
        
        if (!content || !content.trim()) {
            continue;
        }

        setProcessingIndex(i);
        
        const res = await generateItem(item, i);
        if (res) {
            newResults[i] = res.result;
            newAudio[i] = res.audio;
            setBulkResults({ ...newResults });
            setBulkAudio({ ...newAudio });

            if (item.audio) {
                const uploaded = await handleS3Upload(res.audio, item.audio);
                if (uploaded) uploadCount++;
            }
        }
    }
    
    // Prepare combined JSON
    const finalArray = bulkItems.map((item, i) => newResults[i] || item);
    setCombinedJson(finalArray);
    
    setProcessingIndex(null);
    setLoading(false);
    toast.success(`Complete! Generated keys and uploaded ${uploadCount} files.`);
  };

  const handleGenerateSingleItem = async (index: number) => {
      if (!bulkItems) return;
      setProcessingIndex(index);
      const res = await generateItem(bulkItems[index], index);
      if (res) {
          setBulkResults(prev => ({ ...prev, [index]: res.result }));
          setBulkAudio(prev => ({ ...prev, [index]: res.audio }));
          setActiveJsonIndex(index);
          toast.success(`Generated item ${index + 1}`);
      }
      setProcessingIndex(null);
  };

  const handleS3Upload = async (audioDataUrl: string, path: string) => {
       if (!audioDataUrl || !path) {
          console.error("Missing audio or target path for upload");
          return false;
       }
       try {
           const res = await fetch(audioDataUrl);
           const blob = await res.blob();
           const file = new File([blob], "audio.mp3", { type: "audio/mpeg" });
           const formData = new FormData();
           formData.append("file", file);
           
           const cleanPath = path.startsWith("/") ? path.slice(1) : path;
           formData.append("key", cleanPath);

           const response = await fetch("/api/upload-audio", {
              method: "POST",
              body: formData,
           });

           if (!response.ok) throw new Error("Upload failed");
           toast.success(`Uploaded to ${cleanPath}`);
           return true;
       } catch (e: any) {
           toast.error(e.message);
           return false;
       }
  };

  const handleBulkUpload = async () => {
      setUploading(true);
      if (!bulkItems) return;
      let count = 0;
      for (let i = 0; i < bulkItems.length; i++) {
          const res = bulkResults[i];
          const audio = bulkAudio[i];
          if (audio && bulkItems[i].audio) {
             const success = await handleS3Upload(audio, bulkItems[i].audio);
             if (success) count++;
          }
      }
      setUploading(false);
      toast.success(`Uploaded ${count} files`);
  };

  const handleSingleS3Upload = async () => {
      setUploading(true);
      await handleS3Upload(audioSrc!, s3Path);
      setUploading(false);
  };

  const copyToClipboard = () => {
      const data = bulkItems ? Object.values(bulkResults) : result;
      if (!data) return;
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("JSON copied");
  };

   const handleDownload = () => {
      if (!audioSrc) return;
      const link = document.createElement("a");
      link.href = audioSrc;
      link.download = "generated_audio.mp3";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen flex flex-col font-geist">
      <NavbarDemo />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
             Generate Audio
           </h1>
           <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
             {bulkItems ? "Bulk Processing Mode" : "Upload an image, add content, and generate AI audio."}
           </p>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Input */}
              <div className="space-y-6">
                 {!bulkItems && (
                     <div 
                        className="border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors h-48 relative overflow-hidden group"
                        onClick={() => fileInputRef.current?.click()}
                     >
                        {image ? (
                            <Image src={image} alt="Uploaded" fill className="object-cover rounded-lg" />
                        ) : (
                            <div className="text-center">
                                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-500">Upload Image (Optional)</p>
                            </div>
                        )}
                        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                     </div>
                 )}

                 <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex justify-between">
                         Content Script (JSON Object or Array)
                         {!bulkItems && s3Path && <span className="text-xs text-blue-500 font-mono">Upload Path: {s3Path}</span>}
                     </label>
                     <Textarea 
                        placeholder="Enter text or paste JSON object/array..."
                        className="min-h-[300px] text-base resize-none focus:ring-2 focus:ring-blue-500 font-mono"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                     />
                 </div>

                 <div className="flex gap-2">
                    <Button 
                        onClick={handleGenerate}
                        disabled={loading || !text.trim()}
                        className="flex-1 bg-[#1381E5] hover:bg-blue-700 text-white rounded-lg py-4 text-lg font-semibold shadow-lg"
                    >
                        {loading && processingIndex === -1 ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                {bulkItems ? "Processing..." : "Generating..."}
                            </>
                        ) : (
                            bulkItems ? "Generate All" : "Generate"
                        )}
                    </Button>
                    
                    {bulkItems && (
                         <Button 
                            onClick={handleBulkGenerateAndUpload}
                            disabled={loading || !text.trim()}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg py-4 text-lg font-semibold shadow-lg"
                        >
                            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <CloudUpload className="mr-2 h-5 w-5" />}
                            Gen & Upload All
                        </Button>
                    )}
                 </div>
              </div>

              {/* Right: Results */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6 flex flex-col h-full min-h-[500px]">
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {bulkItems ? `Items (${bulkItems.length})` : "Output"}
                    </h2>
                    <div className="flex gap-2">
                        {bulkItems ? (
                             Object.keys(bulkResults).length > 0 && (
                                <>
                                    <Button variant="outline" size="sm" onClick={handleBulkUpload} disabled={uploading} className="gap-2">
                                        {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CloudUpload className="h-4 w-4" />}
                                        Upload All
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </>
                             )
                        ) : (
                            result && (
                                <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-gray-500 hover:text-blue-600">
                                    {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                                    {copied ? "Copied" : "JSON"}
                                </Button>
                            )
                        )}
                    </div>
                 </div>

                  <div className="flex-1 overflow-auto space-y-4">
                    {bulkItems ? (
                        <>
                        {bulkItems.map((item, idx) => {
                            const content = (typeof item === "object" && (item.subtitle || item.text)) 
                                ? (item.subtitle || item.text) 
                                : (typeof item === "string" ? item : null);
                            const hasContent = !!(content && content.trim());
                            const hasResult = !!bulkResults[idx];

                            return (
                            <div key={idx} className={`border ${activeJsonIndex === idx ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200 dark:border-neutral-700'} rounded-lg p-4 bg-gray-50 dark:bg-neutral-900/50 transition-all`}>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1 mr-4">
                                        <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                                            {item.title || `Item ${idx + 1}`}
                                        </p>
                                        <p className="text-xs text-gray-500 font-mono truncate" title={item.audio}>
                                           <span className="opacity-70">Path:</span> {item.audio || "N/A"}
                                        </p>
                                        {!hasContent && <span className="text-[10px] text-red-500 font-medium">No subtitle content</span>}
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        {bulkAudio[idx] && (
                                            <Button 
                                                size="sm" variant="outline" 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const a = new Audio(bulkAudio[idx]);
                                                    a.play();
                                                }}
                                                title="Play Audio"
                                                className="h-8 w-8 p-0 rounded-full"
                                            >
                                                <Play className="h-3 w-3" />
                                            </Button>
                                        )}
                                        {hasResult && (
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => setActiveJsonIndex(activeJsonIndex === idx ? null : idx)}
                                                className="h-8 text-xs px-2 text-gray-500"
                                            >
                                                {activeJsonIndex === idx ? "Hide JSON" : "JSON"}
                                            </Button>
                                        )}
                                        <Button 
                                            size="sm" 
                                            variant={hasResult ? "outline" : "default"}
                                            disabled={!hasContent || processingIndex === idx}
                                            onClick={() => handleGenerateSingleItem(idx)}
                                            className="h-8 text-xs min-w-[60px]"
                                            title={!hasContent ? "No subtitle to generate" : (hasResult ? "Regenerate" : "Generate")}
                                        >
                                            {processingIndex === idx ? <Loader2 className="h-3 w-3 animate-spin mx-auto"/> : (hasResult ? "Regen" : "Gen")}
                                        </Button>
                                    </div>
                                </div>
                                {activeJsonIndex === idx && bulkResults[idx] && (
                                    <div className="mt-3 relative">
                                        <div className="bg-gray-950 text-gray-300 p-3 rounded-md overflow-auto text-xs font-mono max-h-[300px] border border-gray-800">
                                            <pre>{JSON.stringify(bulkResults[idx], null, 2)}</pre>
                                        </div>
                                        <Button 
                                            size="icon" 
                                            variant="ghost" 
                                            className="absolute top-2 right-2 h-6 w-6 bg-gray-800 hover:bg-gray-700 text-white rounded"
                                            onClick={() => {
                                                navigator.clipboard.writeText(JSON.stringify(bulkResults[idx], null, 2));
                                                toast.success("Copied");
                                            }}
                                            title="Copy JSON"
                                        >
                                            <Copy className="h-3 w-3" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )})}
                        {combinedJson && (
                            <div className="mt-6 border-t border-gray-200 dark:border-neutral-700 pt-4">
                                <div className="flex justify-between items-center mb-2">
                                   <label className="text-sm font-bold text-gray-900 dark:text-white">Combined Final JSON</label>
                                   <Button 
                                      size="sm" 
                                      variant="outline" 
                                      onClick={() => {
                                          navigator.clipboard.writeText(JSON.stringify(combinedJson, null, 2));
                                          toast.success("Combined JSON copied!");
                                      }}
                                      className="h-8 gap-2"
                                   >
                                      <Copy className="h-3 w-3" /> Copy All
                                   </Button>
                                </div>
                                <div className="bg-slate-950 text-gray-300 p-3 rounded-lg overflow-auto text-xs font-mono max-h-[300px] border border-gray-800">
                                   <pre>{JSON.stringify(combinedJson, null, 2)}</pre>
                                </div>
                            </div>
                        )}
                        </>
                    ) : (
                        audioSrc ? (
                            <div className="space-y-6 flex-1 flex flex-col">
                               <div className="bg-gray-100 dark:bg-neutral-900 rounded-lg p-4">
                                   <p className="text-xs font-medium text-gray-500 uppercase mb-2">Audio Preview</p>
                                   <audio controls src={audioSrc} className="w-full" />
                               </div>
                               <div className="flex gap-2">
                                   <Button variant="outline" size="sm" onClick={handleDownload} className="flex-1">
                                       <Download className="h-4 w-4 mr-2" /> Download
                                   </Button>
                                   {s3Path && (
                                       <Button variant="default" size="sm" onClick={handleSingleS3Upload} disabled={uploading || !s3Path} className="flex-1">
                                           {uploading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <CloudUpload className="h-4 w-4 mr-2" />}
                                           Upload S3
                                       </Button>
                                   )}
                               </div>
                               <div className="flex-1 overflow-hidden flex flex-col">
                                    <p className="text-xs font-medium text-gray-500 uppercase mb-2">JSON Result</p>
                                    <div className="bg-gray-950 text-gray-300 p-4 rounded-lg overflow-auto flex-1 font-mono text-sm border border-gray-800">
                                       <pre>{result ? JSON.stringify(result, null, 2) : ""}</pre>
                                    </div>
                               </div>
                            </div>
                        ) : (
                             <div className="flex-1 flex flex-col items-center justify-center text-gray-400 opacity-50">
                                 <Play className="h-16 w-16 mb-4" />
                                 <p>Generated audio and JSON will appear here</p>
                             </div>
                        )
                    )}
                 </div>
              </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
