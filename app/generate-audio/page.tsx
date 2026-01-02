"use client";

import React, { useState, useRef } from "react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Upload, Play, Pause, Copy, Check, Download } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function GenerateAudioPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleGenerate = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text");
      return;
    }

    setLoading(true);
    setResult(null);
    setAudioSrc(null);

    try {
      const response = await fetch("/api/generate-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate audio");
      }

      setResult(data.subtitleWords);
      setAudioSrc(`data:audio/mpeg;base64,${data.audio_base64}`);
      toast.success("Audio generated successfully!");

    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
      if (!result) return;
      // Format as "subtitleWords: [...]"
      const formattedJson = `subtitleWords: ${JSON.stringify(result, null, 2)}`;
      navigator.clipboard.writeText(formattedJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("JSON copied to clipboard");
  };

  const handleDownload = () => {
      if (!audioSrc) return;
      const link = document.createElement("a");
      link.href = audioSrc;
      link.download = "generated_audio.mp3";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Download started");
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen flex flex-col font-geist">
      <NavbarDemo />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
             Generate Audio
           </h1>
           <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
             Upload an image, add content, and generate AI audio with word-level timestamps.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Input */}
              <div className="space-y-6">
                 {/* Image Upload */}
                 <div 
                    className="border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors h-64 relative overflow-hidden group"
                    onClick={() => fileInputRef.current?.click()}
                 >
                    {image ? (
                        <Image 
                            src={image} 
                            alt="Uploaded" 
                            fill 
                            className="object-cover rounded-lg"
                        />
                    ) : (
                        <div className="text-center">
                            <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 font-medium">Click to upload image</p>
                            <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                        </div>
                    )}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                 </div>

                 {/* Text Input */}
                 <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Content Script</label>
                     <Textarea 
                        placeholder="Enter the text you want to convert to speech..."
                        className="min-h-[200px] text-base resize-none focus:ring-2 focus:ring-blue-500"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                     />
                 </div>

                 <Button 
                    onClick={handleGenerate}
                    disabled={loading || !text.trim()}
                    className="w-full bg-[#1381E5] hover:bg-blue-700 text-white rounded-lg py-6 text-lg font-semibold shadow-lg"
                 >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Generating Audio...
                        </>
                    ) : (
                        "Generate Audio"
                    )}
                 </Button>
              </div>

              {/* Right Column: Result */}
              <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6 flex flex-col h-full">
                 <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                    Output
                    <div className="flex gap-2">
                        {audioSrc && (
                            <Button variant="outline" size="sm" onClick={handleDownload} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                                <Download className="h-4 w-4 mr-1" />
                                Download MP3
                            </Button>
                        )}
                        {result && (
                            <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-gray-500 hover:text-blue-600">
                                {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                                {copied ? "Copied" : "Copy JSON"}
                            </Button>
                        )}
                    </div>
                 </h2>

                 {audioSrc ? (
                     <div className="space-y-6 flex-1 flex flex-col">
                        <div className="bg-gray-100 dark:bg-neutral-900 rounded-lg p-4">
                            <p className="text-xs font-medium text-gray-500 uppercase mb-2">Audio Preview</p>
                            <audio controls src={audioSrc} className="w-full" />
                        </div>

                        <div className="flex-1 overflow-hidden flex flex-col">
                             <p className="text-xs font-medium text-gray-500 uppercase mb-2">JSON Result</p>
                             <div className="bg-gray-950 text-gray-300 p-4 rounded-lg overflow-auto flex-1 font-mono text-sm border border-gray-800">
                                <pre>{JSON.stringify({ subtitleWords: result }, null, 2)}</pre>
                             </div>
                        </div>
                     </div>
                 ) : (
                     <div className="flex-1 flex flex-col items-center justify-center text-gray-400 opacity-50">
                         <Play className="h-16 w-16 mb-4" />
                         <p>Generated audio and JSON will appear here</p>
                     </div>
                 )}
              </div>
           </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
