
import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get('payment_id') || '';
  const amount = searchParams.get('amount') || '';
  const service = searchParams.get('service') || '';
  const customerName = searchParams.get('name') || '';

  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      const checkmark = document.querySelector('.success-checkmark');
      if (checkmark) {
        checkmark.classList.add('animate-bounce');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 sm:space-y-8">
        {/* Animated Checkmark */}
        <div className="success-checkmark flex justify-center">
          <div className="relative">
            <CheckCircle 
              size={64} 
              className="text-[#FFD700] drop-shadow-lg animate-pulse sm:w-20 sm:h-20" 
            />
            <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full animate-ping"></div>
          </div>
        </div>
        
        {/* Success Message */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-white leading-tight">
            Payment Successful!
          </h1>
          
          <p className="text-base sm:text-lg text-gray-300 font-poppins leading-relaxed px-2">
            Thank you, <span className="text-[#FFD700] font-semibold">{customerName}</span>!<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>Your booking for <span className="text-[#FFD700] font-semibold">{service}</span> has been confirmed.
          </p>
        </div>
        
        {/* Payment Details */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border border-[#2C2C2C] rounded-xl p-4 sm:p-6 space-y-3 shadow-2xl">
          <h2 className="text-lg sm:text-xl font-playfair text-[#FFD700] mb-3 sm:mb-4">Booking Details</h2>
          
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between text-gray-300 gap-1 sm:gap-0">
              <span className="text-sm sm:text-base">Payment ID:</span>
              <span className="text-white font-mono text-xs sm:text-sm break-all">{paymentId}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between text-gray-300 gap-1 sm:gap-0">
              <span className="text-sm sm:text-base">Amount Paid:</span>
              <span className="text-[#FFD700] font-bold text-lg sm:text-xl">₹{amount}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between text-gray-300 gap-1 sm:gap-0">
              <span className="text-sm sm:text-base">Service:</span>
              <span className="text-white text-sm sm:text-base">{service}</span>
            </div>
          </div>
          
          <div className="pt-3 sm:pt-4 border-t border-[#2C2C2C]">
            <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-3">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                <span className="text-[#FFD700] font-semibold">📞 We'll contact you soon</span><br />
                Expected contact time: <span className="text-white">Within 2-4 hours</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3 sm:space-y-4">
          <Link to="/" className="block">
            <Button className="w-full bg-[#FFD700] text-black font-semibold py-3 sm:py-4 rounded-lg hover:bg-[#FFD700]/90 hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 text-base sm:text-lg">
              <Home className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/services" className="block">
            <Button variant="outline" className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300 py-3 sm:py-4 text-base sm:text-lg">
              Book Another Service
            </Button>
          </Link>
        </div>
        
        {/* Contact Info */}
        <div className="text-center text-gray-400 text-xs sm:text-sm space-y-2 pt-4">
          <p>Need help? Contact us:</p>
          <div className="space-y-1">
            <p className="text-[#FFD700] break-all">📧 contact@empiresaloon.com</p>
            <p className="text-[#FFD700]">📱 +91 89397 55670</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
