
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
    >
      <Card className="p-6 bg-card-gradient shadow-lg border-0 rounded-xl">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="h-12 w-12 ring-2 ring-indigo-100">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-indigo-100 text-indigo-600">{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">&quot;{quote}&quot;</p>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
