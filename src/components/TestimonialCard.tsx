
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="px-2"
    >
      <Card className="p-6 bg-white shadow-md border-none h-full">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="h-14 w-14 rounded-full">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-soft-purple/10 text-soft-purple">{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-black">{name}</h3>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">&quot;{quote}&quot;</p>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
