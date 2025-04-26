
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, className = "" }: YouTubeEmbedProps) => {
  return (
    <AspectRatio ratio={16 / 9} className={className}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
      />
    </AspectRatio>
  );
};

export default YouTubeEmbed;
