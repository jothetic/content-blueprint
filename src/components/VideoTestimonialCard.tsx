
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoTestimonialCardProps {
  quote: string;
  thumbnail: string;
  onClick: () => void;
}

const VideoTestimonialCard = ({ quote, thumbnail, onClick }: VideoTestimonialCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card className="bg-transparent border-0 shadow-none">
        <div className="relative cursor-pointer mb-3" onClick={onClick}>
          <img 
            src={thumbnail} 
            alt="Video testimonial thumbnail" 
            className="w-full rounded-lg shadow-md object-cover aspect-video"
          />
          <Button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
            onClick={onClick}
          >
            <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" />
          </Button>
        </div>
        <blockquote className="italic text-sm md:text-lg text-gray-700">"{quote}"</blockquote>
      </Card>
    </motion.div>
  );
};

export default VideoTestimonialCard;
