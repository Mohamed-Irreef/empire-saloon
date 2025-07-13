import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const BookingButton = () => (
    <Button 
      className="btn-gold text-lg px-8 py-4 group"
      onClick={() => setIsBookingModalOpen(true)}
    >
      <Calendar className="mr-2 group-hover:animate-pulse" size={20} />
      Book Appointment
      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
    </Button>
  );

  const ViewServicesButton = () => (
    <Button 
      variant="outline" 
      className="btn-outline-gold text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black"
      onClick={() => navigate('/services')}
    >
      View Services
    </Button>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Empire Men's Saloon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Animated Text */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Where{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400 gold-shimmer">
                Luxury
              </span>{' '}
              Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400">
                Style
              </span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Redefining Men's Grooming with Premium Services, Expert Craftsmanship, and Unmatched Sophistication
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <BookingButton />
            <ViewServicesButton />
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-white">Happy Clients</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold text-primary">5.0</div>
                <Star className="text-primary ml-1" size={20} fill="currentColor" />
              </div>
              <div className="text-white">Client Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={null}
      />
    </section>
  );
};

export default Hero;