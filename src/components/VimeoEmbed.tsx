
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef } from "react";

interface VimeoEmbedProps {
  videoId: string;
  className?: string;
}

const VimeoEmbed = ({ videoId, className = "" }: VimeoEmbedProps) => {
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
          src={`https://player.vimeo.com/video/${videoId}?h=47620c33bc&badge=0&autopause=0&player_id=0&app_id=58479`}
          title="Vimeo video player"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
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

export default VimeoEmbed;
