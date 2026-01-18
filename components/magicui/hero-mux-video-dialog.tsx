"use client";

import { useState } from "react";

import { Play } from "lucide-react";
import MuxPlayer from '@mux/mux-player-react';

import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroMuxVideoProps {
  playbackId: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

export default function HeroMuxVideoDialog({
  playbackId,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroMuxVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className={cn("relative", !isVideoOpen ? className : "")}>
      {!isVideoOpen ? (
        <div
          className="group relative cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        >
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            width={1920}
            height={1080}
            className="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
          />
          <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
            <div className="flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
              <div
                className={`relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]`}
              >
                <Play
                  className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                  style={{
                    filter:
                      "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative isolate z-[1] size-full overflow-hidden rounded-md border-2 border-white">
          <MuxPlayer
            playbackId={playbackId}
            metadata={{
              video_title: 'SimViz Labs Video',
              viewer_user_id: 'Placeholder (optional)',
            }}
            accentColor="#0061ff"
            primaryColor="#a8c6fe"
            className="size-full rounded-md"
            autoPlay // Added autoplay
          />
        </div>
      )}
    </div>
  );
}