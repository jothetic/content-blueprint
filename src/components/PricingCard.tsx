
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

const PricingCard = ({ title, price, features, ctaText, popular }: PricingCardProps) => {
  return (
    <Card className={`p-6 ${popular ? 'bg-white/10' : 'bg-white/5'} backdrop-blur-lg border-gray-800/20 transform transition-all duration-300 hover:scale-105`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="h-5 w-5 text-teal-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
        {ctaText}
      </Button>
    </Card>
  );
};

export default PricingCard;
