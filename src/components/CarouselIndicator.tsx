
import { CircleDot } from 'lucide-react';
import { Button } from './ui/button';

interface CarouselIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  onSelect: (index: number) => void;
}

const CarouselIndicator = ({ totalSlides, currentSlide, onSelect }: CarouselIndicatorProps) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className={`w-8 h-8 p-0 ${currentSlide === index ? 'text-soft-purple' : 'text-gray-400'}`}
          onClick={() => onSelect(index)}
        >
          <CircleDot className="w-4 h-4" />
        </Button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
