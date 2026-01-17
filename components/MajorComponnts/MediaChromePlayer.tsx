'use client'
import React, { useEffect, useRef } from 'react'
import { MediaController, MediaPlayButton } from 'media-chrome/react';
import { Play } from 'lucide-react';

const brandVideoSrc = "https://course-media-simvizlabs.s3.us-east-1.amazonaws.com/intro_video.mp4

const MediaChromePlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controllerRef = useRef<any>(null);

  useEffect(() => {
    // Set volume to 80% when video loads
    if (videoRef.current) {
      videoRef.current.volume = 0.8;
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        media-play-button {
          --media-control-background: rgba(0, 0, 0, 0.5);
          --media-control-hover-background: rgba(0, 0, 0, 0.7);
          width: 150px;
          height: 150px;
          font-size: 6rem;
          color: white;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        media-play-button:hover {
          opacity: 1;
        }
        media-play-button svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <div className='inset-0 w-screen bg-black relative'>
          <MediaController 
              ref={controllerRef}
              className=""
          >
              <video 
                  ref={videoRef}
                  slot="media" 
                  src={brandVideoSrc} 
                  className="w-full h-full" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                  <track
                      label="thumbnails"
                      default
                      kind="metadata"
                      src=""
                  />
              </video>

              {/* Centered play/pause button overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="pointer-events-auto">
                      <MediaPlayButton className='bg-transparent w-40 h-40'/>
                  </div>
              </div>
          </MediaController>
      </div>
    </>
  )
}

export default MediaChromePlayer