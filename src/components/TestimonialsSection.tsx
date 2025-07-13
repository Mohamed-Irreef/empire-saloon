import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Empire Men\'s Saloon exceeded my expectations! The attention to detail and premium service made me feel like royalty. Highly recommend their facial services.',
      service: 'Premium Facial'
    },
    {
      name: 'Arjun Singh',
      rating: 5,
      text: 'Best grooming experience in the city! The barbers are true artists and the ambiance is incredibly luxurious. Will definitely be returning.',
      service: 'Complete Grooming'
    },
    {
      name: 'Vikram Sharma',
      rating: 5,
      text: 'Professional service with a personal touch. The staff is knowledgeable and the results speak for themselves. Worth every rupee!',
      service: 'Premium Haircut'
    },
    {
      name: 'Amit Patel',
      rating: 5,
      text: 'I\'ve been to many salons, but Empire stands out for its exceptional quality and customer service. The luxury experience is unmatched.',
      service: 'Hair Spa Treatment'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience at Empire Men's Saloon.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-background border-border mx-4">
                    <CardContent className="p-8 text-center">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-primary fill-current" size={24} />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg text-muted-foreground mb-6 italic">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Client Info */}
                      <div>
                        <div className="font-semibold text-foreground text-xl">
                          {testimonial.name}
                        </div>
                        <div className="text-primary text-sm">
                          {testimonial.service}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft size={20} />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;