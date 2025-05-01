
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, className = "" }: YouTubeEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Add pointer-events: none when user is scrolling to allow scrolling through the video
    let touchStartY = 0;
    let scrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      scrolling = false;
      
      // Make iframe clickable initially
      if (iframeRef.current) {
        iframeRef.current.style.pointerEvents = 'auto';
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const diff = Math.abs(touchY - touchStartY);
      
      // If user scrolls more than 10px vertically, consider it scrolling
      if (diff > 10) {
        scrolling = true;
        
        // Make iframe non-interactive during scroll to allow page to scroll
        if (iframeRef.current) {
          iframeRef.current.style.pointerEvents = 'none';
        }
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Re-enable iframe interaction after scroll stops
          if (iframeRef.current) {
            iframeRef.current.style.pointerEvents = 'auto';
          }
        }, 200);
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <AspectRatio ratio={16 / 9} className={className}>
      <div className="relative w-full h-full">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${videoId}?playsinline=1`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
          style={{ 
            position: 'relative',
            zIndex: 2
          }}
        />
        {/* Overlay div to help with scrolling */}
        <div 
          className="absolute inset-0 z-10 opacity-0" 
          style={{ 
            touchAction: "pan-y", 
            pointerEvents: "none" 
          }}
          aria-hidden="true"
        />
      </div>
    </AspectRatio>
  );
};

export default YouTubeEmbed;
