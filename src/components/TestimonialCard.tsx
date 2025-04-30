
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useState } from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TestimonialCard = ({ name, role, quote, image }: TestimonialCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="px-1"
    >
      <Card className="p-3 bg-white shadow-sm border-none h-full relative overflow-hidden group">
        <div className="relative z-10">
          <div className="flex items-start space-x-2 mb-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage 
                  src={image} 
                  alt={name} 
                  onLoad={() => setImageLoaded(true)}
                  className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <AvatarFallback className="bg-soft-purple/10 text-soft-purple text-xs">{name[0]}</AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.div
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-bold text-black text-sm">{name}</h3>
              <p className="text-gray-600 text-xs">{role}</p>
            </motion.div>
          </div>
          <motion.p 
            className="text-xs text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-soft-purple text-xs font-serif"
            >
              &ldquo;
            </motion.span>
            {quote}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-soft-purple text-xs font-serif"
            >
              &rdquo;
            </motion.span>
          </motion.p>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
