
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scroller } from "react-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface TestimonialsSectionProps {
  isLoading: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isLoading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const autoplayRef = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const isMobile = useIsMobile();

  const testimonials = [
    {
      name: "Renzo Guevarra",
      role: "CEO Growthology Agency",
      stats: "500k+ followers",
      quote: "Mino got me from 10k to 55k followers on TikTok, 300 to 355k followers on IG.",
      image: "/lovable-uploads/926dd0ff-9b19-4738-bdb1-8ba1a92a7fc8.png",
      videoImage: "/lovable-uploads/171f1432-c3ef-4494-bf8e-3de920255ad2.png"
    },
    {
      name: "Viral Creator",
      role: "Content Creator",
      stats: "2.7M+ Views",
      quote: "Hit over 2.7M views using the viral content strategies from the program.",
      image: "/lovable-uploads/2124a9ca-5b47-4407-bc1d-3e0426632f0c.png",
      videoImage: "/lovable-uploads/f0e0f1dd-3cdb-42b6-81aa-6e31b25c2612.png"
    },
    {
      name: "Growth Expert",
      role: "Social Media Influencer",
      stats: "65K+ Followers",
      quote: "Grew from 0 to 65K real followers using the community building strategies.",
      image: "/lovable-uploads/fd4edd9c-d981-4a64-a1cd-31ac4b99e115.png",
      videoImage: "/lovable-uploads/ea5ac916-acb8-42e8-9695-e42bc31aede1.png"
    }
  ];
  
  React.useEffect(() => {
    if (carouselApi) {
      const updateSlide = () => {
        setCurrentSlide(carouselApi.selectedScrollSnap());
      };
      
      carouselApi.on("select", updateSlide);
      updateSlide();
      
      return () => {
        carouselApi.off("select", updateSlide);
      };
    }
  }, [carouselApi]);

  return (
    <section className="py-8 px-4 bg-white rounded-t-3xl -mt-4 relative z-20">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-purple-500 uppercase text-sm font-medium tracking-wide mb-4">
            STUDENT TESTIMONIALS
          </h2>
          
          <h3 className="text-2xl font-bold mb-2">
            We've helped <span className="text-purple-500">1,000+ creators</span> reach their goals on Instagram and TikTok.
          </h3>
        </div>
        
        <Carousel
          setApi={setCarouselApi}
          plugins={[autoplayRef.current]}
          className="w-full mb-6"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {isLoading ? (
              <CarouselItem>
                <div className="h-64 bg-gray-100 animate-pulse rounded-xl"></div>
              </CarouselItem>
            ) : (
              testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="mr-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-purple-500 text-sm">{testimonial.role}</p>
                        <p className="text-purple-500 text-sm">{testimonial.stats}</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-800 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="relative rounded-lg overflow-hidden">
                      <img 
                        src={testimonial.videoImage}
                        alt="Video thumbnail" 
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/70 rounded-full p-3">
                          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
        </Carousel>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-gray-600" : "bg-gray-300"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button
            className="bg-purple-500 hover:bg-purple-600 text-white rounded-full py-6 px-8 text-lg font-medium w-full mb-20"
            onClick={() => {
              scroller.scrollTo('pricing-section', {
                duration: 800,
                smooth: true,
                offset: -50,
                spy: true
              });
            }}
          >
            Start my personal brand <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              Start your personal<br />branding journey<br />today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join the program that fits<br />your needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
