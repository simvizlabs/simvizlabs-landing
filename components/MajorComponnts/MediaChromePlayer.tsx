'use client'
import React, { useEffect, useRef, useState } from 'react'
import { MediaController, MediaPlayButton } from 'media-chrome/react';
import { Play } from 'lucide-react';

const brandVideoSrc = "https://course-media-simvizlabs.s3.us-east-1.amazonaws.com/intro_video.mp4";
// const brandVideoSrc= "https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
const thumbnailSrc = "https://course-media-simvizlabs.s3.us-east-1.amazonaws.com/into_video_thumbnail.png";

const MediaChromePlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controllerRef = useRef<any>(null);
  const playButtonRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    // Set volume to 80% when video loads
    if (videoRef.current) {
      videoRef.current.volume = 0.8;
      
      // Add event listeners for play/pause
      const handlePlay = () => setIsPaused(false);
      const handlePause = () => setIsPaused(true);
      
      videoRef.current.addEventListener('play', handlePlay);
      videoRef.current.addEventListener('pause', handlePause);
      
      // Check initial state
      setIsPaused(videoRef.current.paused);
      
      return () => {
        videoRef.current?.removeEventListener('play', handlePlay);
        videoRef.current?.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  // Inject styles into shadow DOM - apply to both play and pause buttons
  useEffect(() => {
    const updateShadowStyles = () => {
      // Try to get button from ref first, then fallback to querySelector
      const button = playButtonRef.current || document.querySelector('media-play-button');
      
      if (button?.shadowRoot) {
        const shadowRoot = button.shadowRoot;
        const styleId = 'large-button-style';
        
        // Remove existing style if any
        const existingStyle = shadowRoot.getElementById(styleId);
        if (existingStyle) {
          existingStyle.remove();
        }

        // Always apply large styles for both play and pause buttons
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          :host {
            width: 9vw !important;
            height: 9vh !important;
            font-size: 16rem !important;
          }
          svg {
            width: 30vw !important;
            height: 30vh !important;
            transform: scale(1.5) !important;
          }
          slot[name="icon"] svg,
          slot[name="play"] svg,
          slot[name="pause"] svg {
            width: 9vw !important;
            height: 9vh !important;
            transform: scale(1.5) !important;
          }
          slot[name="pause"] svg {
            width: 9vw !important;
            height: 9vh !important;
            transform: scale(1.5) !important;
          }
          slot[name="play"] svg {
            width: 9vw !important;
            height: 9vh !important;
            transform: scale(1.5) !important;
          }
        `;
        shadowRoot.appendChild(style);
      }
    };

    // Try immediately
    updateShadowStyles();
    
    // Also try after a short delay to ensure shadow DOM is ready
    const timeout = setTimeout(updateShadowStyles, 100);
    
    // Also update when paused state changes to catch any re-renders
    const timeout2 = setTimeout(updateShadowStyles, 200);
    
    // Set up MutationObserver to watch for changes in shadow DOM
    const button = playButtonRef.current || document.querySelector('media-play-button');
    let observer: MutationObserver | null = null;
    
    if (button?.shadowRoot) {
      observer = new MutationObserver(() => {
        updateShadowStyles();
      });
      
      observer.observe(button.shadowRoot, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isPaused]);

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
          transition: all 0.3s ease;
        }
        media-play-button:hover {
          opacity: 1;
        }
        media-play-button svg,
        media-play-button::part(icon),
        media-play-button slot[name="icon"] svg,
        media-play-button slot[name="play"] svg,
        media-play-button slot[name="pause"] svg {
          width: 100%;
          height: 100%;
        }
        media-play-button[data-paused="true"] {
          width: 400px !important;
          height: 400px !important;
          font-size: 16rem !important;
        }
        media-play-button[data-paused="true"] svg,
        media-play-button[data-paused="true"]::part(icon),
        media-play-button[data-paused="true"] slot[name="icon"] svg,
        media-play-button[data-paused="true"] slot[name="play"] svg,
        media-play-button[data-paused="true"] slot[name="pause"] svg {
          width: 100% !important;
          height: 100% !important;
          transform: scale(1.5) !important;
        }
      `}</style>
      <div className='inset-0  text-center justify-center items-center h-[calc(100%-56px)] bg-black relative'>
          <MediaController 
              ref={controllerRef}
              className=""
          >
              <video 
                  ref={videoRef}
                  slot="media" 
                  src={brandVideoSrc} 
                  className={`overflow-hidden md:h-[calc(100vh-56px)] transition-all duration-300 ${isPaused ? 'brightness-75' : 'brightness-100'}`}
                  poster={thumbnailSrc}
               >
                  <track
                      label="thumbnails"
                      default
                      kind="metadata"
                      src={thumbnailSrc}
                  />
              </video>

              {/* Dull overlay when paused */}
              {isPaused && (
                <div className="absolute inset-0 bg-black/30 pointer-events-none z-[5]" />
              )}

              {/* Centered play/pause button overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="pointer-events-auto">
                      <MediaPlayButton 
                          ref={playButtonRef}
                          className="bg-transparent transition-all duration-300"
                          data-paused={isPaused.toString()}
                      />
                  </div>
              </div>
          </MediaController>
      </div>
    </>
  )
}

export default MediaChromePlayer