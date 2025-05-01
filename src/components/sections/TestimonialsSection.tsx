
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { scroller } from "react-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import CarouselIndicator from "@/components/CarouselIndicator";

interface TestimonialsSectionProps {
  isLoading: boolean;
}

// Define more specific types for our testimonials
interface TestimonialBase {
  name: string;
  role: string;
  image: string;
}

interface MessageTestimonial extends TestimonialBase {
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  bio: string;
  description: string;
  contact: string;
  messages: {
    date: string;
    content: string;
    metrics: {
      money?: number;
      fire?: number;
      heart?: number;
    };
    extra?: string;
  }[];
}

interface QuoteTestimonial extends TestimonialBase {
  stats: string;
  quote: string;
  videoImage?: string;
}

type Testimonial = MessageTestimonial | QuoteTestimonial;

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isLoading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const autoplayRef = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const isMobile = useIsMobile();

  const testimonials: Testimonial[] = [
    {
      name: "Joe Lim",
      role: "Digital Creator",
      stats: {
        posts: 1,
        followers: 111,
        following: 53
      },
      bio: "Quant trader turned propagandist",
      description: "I create fan pages for personal brands and artists",
      contact: "DM or Email Joe@overdist.com -> Let's work!",
      messages: [
        {
          date: "04/16/2024 4:12 PM",
          content: "closed my first client 😀",
          metrics: {
            money: 8
          }
        },
        {
          date: "05/17/2024 8:41 AM",
          content: "closed 7.8k in sales yesterday 😊",
          metrics: {
            fire: 7,
            heart: 2
          },
          extra: "and 2m views for my client in 8 or 9 days :O"
        }
      ],
      image: "/lovable-uploads/c597c321-67d9-4df6-b5f5-1268e45abc71.png"
    },
    {
      name: "JT",
      role: "Digital Product Creator",
      stats: "30k TikTok followers",
      quote: "Grew my TikTok from 10k to 30k followers and built a profitable digital product business.",
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

  const goToPreviousSlide = () => {
    if (carouselApi) carouselApi.scrollPrev();
  };

  const goToNextSlide = () => {
    if (carouselApi) carouselApi.scrollNext();
  };

  // Helper function to check if a testimonial is a MessageTestimonial
  const isMessageTestimonial = (testimonial: Testimonial): testimonial is MessageTestimonial => {
    return 'messages' in testimonial;
  };

  return (
    <section className="py-8 px-4 bg-white rounded-t-3xl -mt-4 relative z-20">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-purple-500 uppercase text-sm font-medium tracking-wide mb-4">
            STUDENT TESTIMONIALS
          </h2>
          
          <h3 className="text-2xl font-bold mb-6">
            We've helped <span className="text-purple-500">1,000+ creators</span> reach their goals on Instagram and TikTok.
          </h3>
        </div>
        
        {isLoading ? (
          <div className="h-64 bg-gray-100 animate-pulse rounded-xl mb-10"></div>
        ) : (
          <div className="relative mb-6">
            {/* Featured testimonial carousel */}
            <Carousel
              setApi={setCarouselApi}
              plugins={[autoplayRef.current]}
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent>
                {/* Joe Lim Testimonial */}
                <CarouselItem key="joe" className="basis-full">
                  <div className="bg-white rounded-xl">
                    <div className="flex items-start mb-3">
                      <div className="mr-3">
                        <img 
                          src={testimonials[0].image} 
                          alt={testimonials[0].name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[0].name}</h4>
                        {isMessageTestimonial(testimonials[0]) && (
                          <div className="flex text-xs space-x-4 mb-1">
                            <span><b>{testimonials[0].stats.posts}</b> post</span>
                            <span><b>{testimonials[0].stats.followers}</b> followers</span>
                            <span><b>{testimonials[0].stats.following}</b> following</span>
                          </div>
                        )}
                        <p className="font-medium text-xs">
                          {isMessageTestimonial(testimonials[0]) ? testimonials[0].bio : ''}
                        </p>
                        <p className="text-xs">
                          {isMessageTestimonial(testimonials[0]) ? testimonials[0].description : ''}
                        </p>
                        <p className="text-xs">
                          {isMessageTestimonial(testimonials[0]) ? testimonials[0].contact : ''}
                        </p>
                      </div>
                    </div>
                    
                    {/* Messages */}
                    {isMessageTestimonial(testimonials[0]) && (
                      <div className="space-y-3">
                        {testimonials[0].messages.map((message, idx) => (
                          <div key={idx} className="bg-black rounded-lg p-3 text-white">
                            <div className="flex items-center gap-2 mb-1">
                              <img 
                                src={testimonials[0].image} 
                                alt={testimonials[0].name}
                                className="w-6 h-6 rounded-full object-cover"
                              />
                              <span className="text-sm">{testimonials[0].name.toLowerCase()}</span>
                              <span className="text-xs text-gray-400">{message.date}</span>
                            </div>
                            <p className="mb-2">{message.content}</p>
                            <div className="flex gap-2">
                              {message.metrics.money && (
                                <span className="bg-blue-900/50 rounded-md px-2 py-1 text-sm">
                                  💰 {message.metrics.money}
                                </span>
                              )}
                              {message.metrics.fire && (
                                <span className="bg-blue-900/50 rounded-md px-2 py-1 text-sm">
                                  🔥 {message.metrics.fire}
                                </span>
                              )}
                              {message.metrics.heart && (
                                <span className="bg-blue-900/50 rounded-md px-2 py-1 text-sm">
                                  ❤️ {message.metrics.heart}
                                </span>
                              )}
                              <span className="bg-blue-900/50 rounded-md px-2 py-1 text-sm">
                                😊
                              </span>
                            </div>
                            {message.extra && (
                              <p className="mt-2 text-sm">{message.extra}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CarouselItem>

                {/* JT Testimonial */}
                <CarouselItem key="jt" className="basis-full">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="mr-3">
                        <img 
                          src={testimonials[1].image} 
                          alt={testimonials[1].name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[1].name}</h4>
                        <p className="text-purple-500 text-sm">{testimonials[1].role}</p>
                        <p className="text-purple-500 text-sm">
                          {!isMessageTestimonial(testimonials[1]) ? testimonials[1].stats : ''}
                        </p>
                      </div>
                    </div>
                    
                    {!isMessageTestimonial(testimonials[1]) && (
                      <>
                        <blockquote className="text-gray-800 mb-4">
                          "{testimonials[1].quote}"
                        </blockquote>
                        
                        {testimonials[1].videoImage && (
                          <div className="relative rounded-lg overflow-hidden">
                            <img 
                              src={testimonials[1].videoImage}
                              alt="Video thumbnail" 
                              className="w-full h-auto rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/70 rounded-full p-3">
                                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </CarouselItem>

                {/* Viral Creator Testimonial */}
                <CarouselItem key="viral" className="basis-full">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="mr-3">
                        <img 
                          src={testimonials[2].image} 
                          alt={testimonials[2].name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[2].name}</h4>
                        <p className="text-purple-500 text-sm">{testimonials[2].role}</p>
                        <p className="text-purple-500 text-sm">
                          {!isMessageTestimonial(testimonials[2]) ? testimonials[2].stats : ''}
                        </p>
                      </div>
                    </div>
                    
                    {!isMessageTestimonial(testimonials[2]) && (
                      <>
                        <blockquote className="text-gray-800 mb-4">
                          "{testimonials[2].quote}"
                        </blockquote>
                        
                        {testimonials[2].videoImage && (
                          <div className="relative rounded-lg overflow-hidden">
                            <img 
                              src={testimonials[2].videoImage}
                              alt="Video thumbnail" 
                              className="w-full h-auto rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/70 rounded-full p-3">
                                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
              <button 
                onClick={goToPreviousSlide} 
                className="bg-white/30 hover:bg-white/40 rounded-full w-8 h-8 flex items-center justify-center pointer-events-auto"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
              <button 
                onClick={goToNextSlide} 
                className="bg-white/30 hover:bg-white/40 rounded-full w-8 h-8 flex items-center justify-center pointer-events-auto"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>
        )}
        
        {/* Horizontal testimonials stacked as per reference */}
        {!isLoading && (
          <div className="mb-8">
            <div className="grid gap-4">
              <TestimonialCard
                name="JT"
                role="Digital Product Creator"
                quote="Went from 10k to 30k TikTok followers and built a profitable digital product business."
                image="/lovable-uploads/926dd0ff-9b19-4738-bdb1-8ba1a92a7fc8.png"
              />
              <TestimonialCard
                name="Viral Creator"
                role="Content Creator"
                quote="Hit over 2.7M views using the viral content strategies from the program."
                image="/lovable-uploads/2124a9ca-5b47-4407-bc1d-3e0426632f0c.png"
              />
              <TestimonialCard
                name="Growth Expert"
                role="Brand Consultant"
                quote="The strategy helped me double my client's engagement rate in just two weeks."
                image="/lovable-uploads/c597c321-67d9-4df6-b5f5-1268e45abc71.png"
              />
            </div>
          </div>
        )}

        {/* Dots Indicator */}
        <CarouselIndicator
          totalSlides={3}
          currentSlide={currentSlide}
          onSelect={(idx) => carouselApi?.scrollTo(idx)}
        />
        
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
