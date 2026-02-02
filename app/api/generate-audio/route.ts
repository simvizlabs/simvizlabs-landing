import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ElevenLabs API key is missing" },
        { status: 500 }
      );
    }

    // Default Voice ID: Rachel (JBFqnCBsd6RMkjVDRZzb)
    const voiceId = "EkK5I93UQWFDigLMpZcX";
    const modelId = "eleven_multilingual_v2";

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text,
          model_id: modelId,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail?.message || "Failed to generate audio");
    }

    const data = await response.json();
    const { audio_base64, alignment } = data;

    // Transform character-level alignment to word-level subtitles
    const subtitleWords = [];
    let currentWord = "";
    let wordStartTime = 0;
    let wordEndTime = 0;
    
    // Safety check for alignment data
    if (alignment && alignment.characters && alignment.character_start_times_seconds && alignment.character_end_times_seconds) {
        const chars = alignment.characters;
        const starts = alignment.character_start_times_seconds;
        const ends = alignment.character_end_times_seconds;

        let inWord = false;

        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            
            // Check if character is part of a word (not a space or just punctuation)
            // Adapting logic: accumulate characters until a space or end of string
            if (char.trim() !== "") {
                if (!inWord) {
                    inWord = true;
                    wordStartTime = starts[i];
                }
                currentWord += char;
                wordEndTime = ends[i]; // Update end time as we extend the word
            } else {
                // Space detected, push the accumulated word if exists
                if (inWord) {
                    subtitleWords.push({
                        word: currentWord,
                        start: wordStartTime,
                        end: wordEndTime,
                    });
                    currentWord = "";
                    inWord = false;
                }
            }
        }

        // Push the last word if exists
        if (inWord) {
            subtitleWords.push({
                word: currentWord,
                start: wordStartTime,
                end: wordEndTime,
            });
        }
    }

    return NextResponse.json({
      audio_base64,
      subtitleWords,
    });

  } catch (error: any) {
    console.error("Error generating audio:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
