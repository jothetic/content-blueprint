
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="bg-transparent border-0 shadow-none">
        <motion.div 
          className="relative cursor-pointer mb-3 overflow-hidden rounded-lg"
          whileHover="hover"
          onClick={onClick}
        >
          <motion.img 
            src={thumbnail} 
            alt="Video testimonial thumbnail" 
            className="w-full rounded-lg shadow-lg object-cover aspect-video transform"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0"
            variants={{
              hover: { opacity: 1 }
            }}
            transition={{ duration: 0.2 }}
          />
          <Button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
            onClick={onClick}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" />
            </motion.div>
          </Button>
        </motion.div>
        <motion.blockquote 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="italic text-sm md:text-lg text-gray-700 bg-gradient-to-r from-[#2A0F49]/5 to-transparent p-4 rounded-lg"
        >
          "{quote}"
        </motion.blockquote>
      </Card>
    </motion.div>
  );
};

export default VideoTestimonialCard;
