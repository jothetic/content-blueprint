
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface VideoTestimonialCardProps {
  quote: string;
  thumbnail: string;
  onClick: () => void;
}

const VideoTestimonialCard = ({ quote, thumbnail, onClick }: VideoTestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Card className="bg-transparent border-0 shadow-none">
        <blockquote className="italic text-lg text-gray-700 mb-4">"{quote}"</blockquote>
        <div className="relative cursor-pointer" onClick={onClick}>
          <img 
            src={thumbnail} 
            alt="Video testimonial thumbnail" 
            className="w-full rounded-lg shadow-md object-cover aspect-video"
          />
          <Button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center"
            onClick={onClick}
          >
            <Play className="h-8 w-8 text-white ml-1" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default VideoTestimonialCard;
