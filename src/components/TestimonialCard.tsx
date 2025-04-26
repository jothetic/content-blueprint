
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  followers: string;
  quote: string;
  image: string;
}

const TestimonialCard = ({ name, role, followers, quote, image }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-lg border-gray-800/20">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-teal-500">{role}</p>
          <p className="text-sm text-gray-400">{followers}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">&quot;{quote}&quot;</p>
    </Card>
  );
};

export default TestimonialCard;
