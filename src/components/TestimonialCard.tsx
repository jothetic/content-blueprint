
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TestimonialCard = ({ name, role, quote, image }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="px-2"
    >
      <Card className="p-6 glass-card h-full transform transition-all duration-300 hover:shadow-2xl">
        <motion.div 
          className="flex items-start space-x-4 mb-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Avatar className="h-14 w-14 rounded-full ring-2 ring-[#9B6FFF]/20">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-[#9B6FFF]/10 text-[#9B6FFF]">{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-white">{name}</h3>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </motion.div>
        <motion.p 
          className="text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          &quot;{quote}&quot;
        </motion.p>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
