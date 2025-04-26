
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  followers: string;
  quote: string;
  image: string;
}

const TestimonialCard = ({ name, role, followers, quote, image }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-12 w-12 ring-2 ring-teal-500/20">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-teal-500/10 text-teal-500">{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="text-teal-400">{role}</p>
            <p className="text-sm text-gray-400">{followers}</p>
          </div>
        </div>
        <p className="text-gray-300 italic leading-relaxed">&quot;{quote}&quot;</p>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
