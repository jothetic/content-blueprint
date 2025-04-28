
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
    <div className="flex justify-center gap-2 mt-4 flex-wrap">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className={`w-8 h-8 p-0 ${currentSlide === index ? 'text-purple-500' : 'text-gray-400'}`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={currentSlide === index}
        >
          <CircleDot className="w-4 h-4" />
        </Button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
