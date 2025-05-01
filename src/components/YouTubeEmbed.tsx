
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, className = "" }: YouTubeEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Create a transparent overlay over iframe to handle touch events
    const container = iframeRef.current?.parentElement;
    if (container) {
      const overlay = document.createElement('div');
      overlay.style.position = 'absolute';
      overlay.style.inset = '0';
      overlay.style.zIndex = '5';
      overlay.style.touchAction = 'pan-y';
      
      // Track if user is scrolling vs clicking
      let startY = 0;
      let isScrolling = false;
      
      overlay.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isScrolling = false;
        
        // Initially disable iframe interaction
        if (iframeRef.current) {
          iframeRef.current.style.pointerEvents = 'none';
        }
      }, { passive: true });
      
      overlay.addEventListener('touchmove', (e) => {
        const diff = Math.abs(e.touches[0].clientY - startY);
        if (diff > 10) {
          isScrolling = true;
        }
      }, { passive: true });
      
      overlay.addEventListener('touchend', () => {
        // Re-enable iframe interaction after touch ends if not scrolling
        setTimeout(() => {
          if (!isScrolling && iframeRef.current) {
            iframeRef.current.style.pointerEvents = 'auto';
          }
        }, 100);
      }, { passive: true });
      
      container.appendChild(overlay);
      
      return () => {
        container.removeChild(overlay);
      };
    }
  }, []);
  
  return (
    <AspectRatio ratio={16 / 9} className={className}>
      <div className="relative w-full h-full" style={{ touchAction: "pan-y" }}>
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${videoId}?playsinline=1`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
          style={{ 
            position: 'relative',
            zIndex: 2,
          }}
        />
      </div>
    </AspectRatio>
  );
};

export default YouTubeEmbed;
