import React, { useState, useEffect } from 'react';
import { X, Users, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const WhatsAppChannelPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShownPopup = sessionStorage.getItem('whatsapp-channel-popup-shown');
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('whatsapp-channel-popup-shown', 'true');
      }, 45000); // 45 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleJoinChannel = () => {
    window.open('https://whatsapp.com/channel/0029Vb6HekbDzgT3C203QL26', '_blank');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md w-[95vw] p-0 bg-transparent border-none overflow-hidden">
        <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>

          {/* Content */}
          <div className="relative p-6 text-white">
            {/* Header */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">Join Our WhatsApp Channel!</h3>
              <p className="text-green-100 text-sm">Stay updated with latest offers & services</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={12} />
                </div>
                <span>Exclusive discounts & offers</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={12} />
                </div>
                <span>Tips & tricks from professionals</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={12} />
                </div>
                <span>Latest updates & announcements</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex justify-center space-x-2 mb-6">
              <Badge className="bg-white/20 text-white border-white/30">
                500+ Members
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                Daily Updates
              </Badge>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleJoinChannel}
                className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold py-3 transition-all duration-300 hover:scale-105"
              >
                Join Channel Now
              </Button>
              <Button
                onClick={handleClose}
                variant="ghost"
                className="w-full text-white hover:bg-white/10 text-sm"
              >
                Maybe Later
              </Button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppChannelPopup;