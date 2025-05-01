
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, className = "" }: YouTubeEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Fix for iOS iframe scrolling issues
    const handleScroll = (e: Event) => {
      // Allow page scrolling to continue
      e.stopPropagation();
    };

    // Add listener to parent container
    const container = iframeRef.current?.parentElement;
    if (container) {
      container.addEventListener('touchstart', handleScroll, { passive: true });
      container.addEventListener('touchmove', handleScroll, { passive: true });
    }
    
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleScroll);
        container.removeEventListener('touchmove', handleScroll);
      }
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
      </div>
    </AspectRatio>
  );
};

export default YouTubeEmbed;
