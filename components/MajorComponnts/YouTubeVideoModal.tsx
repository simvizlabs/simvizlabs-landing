"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface YouTubeVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export function YouTubeVideoModal({
  isOpen,
  onClose,
  videoId,
}: YouTubeVideoModalProps) {
  // Extract video ID from URL if needed, or use directly if it's already an ID
  const extractVideoId = (urlOrId: string): string => {
    // If it's already just an ID (no slashes or dots), return as is
    if (!urlOrId.includes('/') && !urlOrId.includes('.')) {
      return urlOrId;
    }
    
    // Handle youtu.be format: https://youtu.be/VIDEO_ID
    if (urlOrId.includes('youtu.be/')) {
      return urlOrId.split('youtu.be/')[1]?.split('?')[0] || videoId;
    }
    
    // Handle youtube.com format: https://www.youtube.com/watch?v=VIDEO_ID
    if (urlOrId.includes('youtube.com')) {
      const match = urlOrId.match(/[?&]v=([^&]+)/);
      return match ? match[1] : videoId;
    }
    
    return videoId;
  };

  const finalVideoId = extractVideoId(videoId);
  const embedUrl = `https://www.youtube.com/embed/${finalVideoId}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black border-none sm:rounded-lg">
        <div className="relative w-full aspect-video">
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="YouTube video player"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
