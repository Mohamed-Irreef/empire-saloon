import React, { useEffect, useState } from 'react';
import { Crown } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('enter');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase('exit');
    },5000);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-all duration-1000 ${
      animationPhase === 'exit' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background animate-pulse"></div>
      
      {/* Logo Animation */}
      <div className={`relative text-center transition-all duration-1000 ${
        animationPhase === 'enter' ? 'animate-fade-in scale-100' : 'scale-125'
      }`}>
        {/* Crown Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Crown 
              size={80} 
              className="text-primary animate-bounce" 
              style={{ animationDuration: '2s' }}
            />
            <div className="absolute inset-0 Crown text-primary/30 animate-ping"></div>
          </div>
        </div>
        
        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary gold-shimmer">
            Empire
          </h1>
          <p className="text-xl md:text-2xl font-playfair text-foreground tracking-wide">
            Men's Saloon
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 animate-pulse"></div>
        </div>
        
        {/* Tagline */}
        <p className="text-sm md:text-base text-muted-foreground mt-6 font-poppins tracking-wider animate-fade-in">
          Where Luxury Meets Style
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-bounce opacity-80"></div>
    </div>
  );
};

export default SplashScreen;