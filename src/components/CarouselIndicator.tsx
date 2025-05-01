
import { Circle } from 'lucide-react';
import { Button } from './ui/button';

interface CarouselIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  onSelect: (index: number) => void;
}

const CarouselIndicator = ({ totalSlides, currentSlide, onSelect }: CarouselIndicatorProps) => {
  if (totalSlides <= 1) return null;
  
  return (
    <div className="flex justify-center gap-1.5 flex-wrap">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className={`w-6 h-6 p-0 transition-all duration-300 ${
            currentSlide === index 
              ? 'text-purple-500 scale-110' 
              : 'text-gray-300'
          }`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={currentSlide === index}
        >
          <Circle 
            className={`w-2.5 h-2.5 transition-all duration-300 ${
              currentSlide === index ? 'fill-current' : ''
            }`} 
          />
        </Button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
