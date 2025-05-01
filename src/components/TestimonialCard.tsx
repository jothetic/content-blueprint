
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
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="px-2"
    >
      <Card className="p-6 bg-white shadow-md border-border-color h-full relative overflow-hidden group">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-success-accent/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ 
            x: hovered ? "100%" : "-100%"
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10">
          <div className="flex items-start space-x-4 mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar className="h-14 w-14 rounded-full">
                <AvatarImage 
                  src={image} 
                  alt={name} 
                  onLoad={() => setImageLoaded(true)}
                  className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <AvatarFallback className="bg-primary-blue/10 text-primary-blue">{name[0]}</AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-headline-text">{name}</h3>
              <p className="text-muted-text text-sm">{role}</p>
            </motion.div>
          </div>
          <motion.p 
            className="text-body-text leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-primary-blue text-xl font-serif"
            >
              &ldquo;
            </motion.span>
            {quote}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-primary-blue text-xl font-serif"
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
