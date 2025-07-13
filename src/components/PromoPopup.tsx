import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Star, Scissors, Sparkles, ArrowRight, Clock, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('promoPopupShown');
    
    if (!popupShown && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('promoPopupShown', 'true');
      }, 20000); // Show after 20 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const services = [
    { name: 'Premium Haircut', price: '₹100', icon: Scissors },
    { name: 'Glow Facial', price: '₹349', icon: Sparkles },
    { name: 'Raga Strawberry', price: '₹1799', icon: Star }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md w-[95vw] p-0 bg-gradient-to-br from-background via-background to-primary/5 border-2 border-primary/20 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-colors backdrop-blur-sm"
          >
            <X size={16} />
          </button>

          {/* Header with Animation */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center mb-3">
                <Gift className="mr-2 animate-bounce" size={24} />
                <Badge className="bg-white/20 text-white border-white/30">
                  Limited Time Offer
                </Badge>
              </div>
              
              <h2 className="text-2xl font-playfair font-bold mb-2">
                Transform Your Look Today!
              </h2>
              
              <p className="text-sm opacity-90">
                Professional grooming services at unbeatable prices
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Special Offer */}
            <div className="text-center">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Clock size={16} className="mr-2" />
                Book today & get 10% off
              </div>
              
              <p className="text-muted-foreground text-sm">
                Experience luxury grooming at Empire Men's Saloon. Book any service now and enjoy special pricing!
              </p>
            </div>

            {/* Popular Services */}
            <div className="space-y-3">
              <h3 className="font-semibold text-center">Popular Services</h3>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between bg-card/50 p-3 rounded-lg border border-border/50">
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <service.icon size={16} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium">{service.name}</span>
                    </div>
                    <div className="text-primary font-bold">{service.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="space-y-3">
              <Link to="/services" onClick={handleClose}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg group">
                  <Sparkles className="mr-2 group-hover:animate-spin" size={18} />
                  View All Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              
              <div className="grid grid-cols-2 gap-3">
                <a href="tel:+918939755670">
                  <Button variant="outline" className="w-full text-sm py-2">
                    📞 Call Now
                  </Button>
                </a>
                <a href="https://wa.me/918939755670" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full text-sm py-2">
                    💬 WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center border-t border-border pt-4">
              <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Star className="text-yellow-500 mr-1" size={12} />
                  <span>5.0 Rating</span>
                </div>
                <div>500+ Happy Clients</div>
                <div>Mon-Sun 9AM-9PM</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoPopup;