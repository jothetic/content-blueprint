
import { CircleDot } from 'lucide-react';
import { Button } from './ui/button';

interface CarouselIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  onSelect: (index: number) => void;
}

const CarouselIndicator = ({ totalSlides, currentSlide, onSelect }: CarouselIndicatorProps) => {
  if (totalSlides <= 1) return null;
  
  return (
    <div className="flex justify-center gap-1 items-center">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className={`w-6 h-6 p-0 ${currentSlide === index ? 'text-[#3B82F6]' : 'text-gray-400'}`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={currentSlide === index}
        >
          <CircleDot className="w-3 h-3" />
        </Button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
