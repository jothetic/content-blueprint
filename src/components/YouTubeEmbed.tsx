import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef, useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, className = "" }: YouTubeEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    if (!iframeRef.current || !containerRef.current) return;
    
    // Function to detect scroll intent vs. click intent
    const handleTouchStart = (e: TouchEvent) => {
      // Initially make iframe non-interactive to prioritize scroll
      if (iframeRef.current) {
        iframeRef.current.style.pointerEvents = 'none';
      }
      
      // Store initial touch position
      const startY = e.touches[0].clientY;
      
      const handleTouchMove = (e: TouchEvent) => {
        const currentY = e.touches[0].clientY;
        const diff = Math.abs(currentY - startY);
        
        // If significant vertical movement detected, user is scrolling
        if (diff > 10) {
          setIsScrolling(true);
          // Keep iframe non-interactive during scroll
          if (iframeRef.current) {
            iframeRef.current.style.pointerEvents = 'none';
          }
        }
      };
      
      const handleTouchEnd = () => {
        // Small delay before re-enabling iframe interaction
        setTimeout(() => {
          if (iframeRef.current && !isScrolling) {
            // Only re-enable if user wasn't scrolling
            iframeRef.current.style.pointerEvents = 'auto';
          }
          setIsScrolling(false);
        }, 100);
        
        // Clean up move and end listeners
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      // Add move and end listeners
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    };
    
    // Handle container receiving focus/click
    const handleContainerClick = () => {
      if (iframeRef.current && !isScrolling) {
        iframeRef.current.style.pointerEvents = 'auto';
      }
    };
    
    // Set up global scroll detection
    const handleWindowScroll = () => {
      setIsScrolling(true);
      if (iframeRef.current) {
        iframeRef.current.style.pointerEvents = 'none';
      }
      
      // Clear existing timeout
      if (window.scrollTimeout) {
        window.clearTimeout(window.scrollTimeout);
      }
      
      // Re-enable iframe interaction after scroll stops
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };
    
    // Add all event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('scroll', handleWindowScroll, { passive: true });
    containerRef.current.addEventListener('click', handleContainerClick);
    
    // Clean up
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('scroll', handleWindowScroll);
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', handleContainerClick);
      }
      if (window.scrollTimeout) {
        window.clearTimeout(window.scrollTimeout);
      }
    };
  }, [isScrolling]);

  // Update stylesheet to add scrollTimeout to Window interface
  useEffect(() => {
    // Add CSS rule to improve scrolling experience
    const style = document.createElement('style');
    style.textContent = `
      html, body {
        overscroll-behavior-y: none;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        touch-action: manipulation;
        height: 100%;
      }
      iframe {
        touch-action: pan-y;
      }
      .scroll-overlay {
        position: absolute;
        inset: 0;
        z-index: 10;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <AspectRatio ratio={16 / 9} className={className}>
      <div 
        ref={containerRef}
        className="relative w-full h-full"
        style={{ touchAction: "pan-y" }}
      >
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
            pointerEvents: isScrolling ? 'none' : 'auto'
          }}
        />
        {/* This transparent overlay helps with proper scroll handling on mobile */}
        <div 
          className="absolute inset-0 scroll-overlay" 
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

// Add scrollTimeout property to Window interface
declare global {
  interface Window {
    scrollTimeout?: NodeJS.Timeout;
  }
}

export default YouTubeEmbed;
