
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { XCircle, RefreshCw, MessageCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentFailed = () => {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get('reason') || 'Payment could not be processed';

  const handleRetry = () => {
    window.history.back();
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Hi! I faced an issue with payment on your website. Can you please help?');
    window.open(`https://wa.me/+911234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <XCircle 
            size={80} 
            className="text-[#D32F2F] drop-shadow-lg animate-pulse" 
          />
        </div>
        
        {/* Error Banner */}
        <div className="bg-[#D32F2F] text-white p-4 rounded-lg">
          <h1 className="text-2xl font-playfair font-bold mb-2">
            Oops! Payment Failed
          </h1>
          <p className="text-sm font-poppins">
            We couldn't process your payment. Please try again.
          </p>
        </div>
        
        {/* Error Details */}
        <div className="bg-[#1a1a1a] border border-[#D32F2F] rounded-lg p-6">
          <h2 className="text-lg font-playfair text-white mb-3">What happened?</h2>
          <p className="text-gray-300 text-sm font-poppins leading-relaxed">
            {reason}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleRetry}
            className="w-full bg-[#FFD700] text-black font-semibold py-3 rounded-lg hover:bg-[#FFD700]/90 hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300"
          >
            <RefreshCw className="mr-2" size={20} />
            Retry Payment
          </Button>
          
          <Button 
            onClick={handleWhatsAppContact}
            variant="outline" 
            className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300"
          >
            <MessageCircle className="mr-2" size={20} />
            Contact Us on WhatsApp
          </Button>
          
          <Link to="/">
            <Button 
              variant="ghost" 
              className="w-full text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all duration-300"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Help Section */}
        <div className="bg-[#1a1a1a] rounded-lg p-4 text-left">
          <h3 className="text-[#FFD700] font-playfair font-semibold mb-2">Need Help?</h3>
          <ul className="text-gray-300 text-sm space-y-1 font-poppins">
            <li>• Check your internet connection</li>
            <li>• Verify your card details</li>
            <li>• Ensure sufficient balance</li>
            <li>• Try a different payment method</li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="text-center text-gray-400 text-sm">
          <p>Still facing issues?</p>
          <p className="text-[#FFD700]">📧 support@empiremenssaloon.com</p>
          <p className="text-[#FFD700]">📱 +91 12345 67890</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
