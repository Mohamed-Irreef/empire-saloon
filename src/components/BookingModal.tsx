
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { X, Loader2, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface Service {
  name: string;
  price: string;
  description: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const BookingModal = ({ isOpen, onClose, service }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    selectedService: '',
    date: undefined as Date | undefined,
    time: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Available services for dropdown
  const availableServices = [
    { value: 'haircut', label: "Men's Haircut - ₹100" },
    { value: 'facial-glow', label: 'Glow Facial - ₹349' },
    { value: 'facial-gold', label: 'Gold Facial - ₹399' },
    { value: 'facial-fruit', label: 'Fruit Facial - ₹699' },
    { value: 'facial-papaya', label: 'ASB Papaya Facial - ₹799' },
    { value: 'facial-whitening', label: 'ASB Skin Whitening - ₹999' },
    { value: 'raga-strawberry', label: 'Raga Strawberry - ₹1799' },
    { value: 'raga-platinum', label: 'Raga Platinum - ₹2299' },
    { value: 'la-mariniere', label: 'La Mariniere - ₹2999' },
    { value: 'skin-miracle', label: 'Skin Miracle Facial - ₹3499' },
    { value: 'bridal-kit', label: 'O3+ Bridal Kit - ₹3999' }
  ];

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
  ];

  // Check if Razorpay is loaded
  useEffect(() => {
    const checkRazorpay = () => {
      if (window.Razorpay) {
        setRazorpayLoaded(true);
        console.log('Razorpay loaded successfully');
      } else {
        console.log('Razorpay not loaded yet, retrying...');
        setTimeout(checkRazorpay, 100);
      }
    };
    
    checkRazorpay();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!service && !formData.selectedService) {
      newErrors.selectedService = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    console.log('Payment button clicked');
    
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    if (!service && !formData.selectedService) {
      console.log('No service selected');
      return;
    }

    if (!razorpayLoaded) {
      alert('Payment system is still loading. Please wait a moment and try again.');
      return;
    }

    if (!window.Razorpay) {
      alert('Payment system not available. Please refresh the page and try again.');
      return;
    }

    setIsProcessing(true);

    try {
      // Extract numeric price from service or selected service
      const servicePrice = service ? service.price : formData.selectedService.split(' - ')[1];
      const amount = parseInt(servicePrice.replace(/[^\d]/g, '')) * 100; // Convert to paise
      
      console.log('Creating payment for amount:', amount);

      // Your actual Razorpay test key
      const RAZORPAY_KEY = 'rzp_test_pCmyB6RO7ZK7iB';

      const options = {
        key: RAZORPAY_KEY,
        amount: amount,
        currency: 'INR',
        name: 'Empire Men\'s Saloon',
        description: service ? service.name : formData.selectedService,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#FFD700'
        },
        handler: async function (response: any) {
          console.log('Payment successful:', response);
          setIsProcessing(false);
          
          // Send booking confirmation
          await sendBookingConfirmation({
            ...formData,
            service: service ? service.name : formData.selectedService,
            amount: amount / 100,
            paymentId: response.razorpay_payment_id,
            date: formData.date,
            time: formData.time
          });
          
          // Close modal first
          onClose();
          
          // Redirect to success page
          const serviceName = service ? service.name : formData.selectedService;
          window.location.href = `/payment-success?payment_id=${response.razorpay_payment_id}&amount=${amount / 100}&service=${encodeURIComponent(serviceName)}&name=${encodeURIComponent(formData.name)}`;
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal dismissed');
            setIsProcessing(false);
          }
        }
      };

      console.log('Initializing Razorpay with options:', options);
      
      const razorpay = new window.Razorpay(options);
      
      razorpay.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response.error);
        setIsProcessing(false);
        onClose();
        window.location.href = `/payment-failed?reason=${encodeURIComponent(response.error.description)}`;
      });
      
      razorpay.open();
      
    } catch (error) {
      console.error('Payment initialization failed:', error);
      setIsProcessing(false);
      alert('Failed to initialize payment. Please try again.');
    }
  };

  const sendBookingConfirmation = async (bookingData: any) => {
    try {
      // Send Telegram notification
      const telegramMessage = `🎯 New Booking – Empire Men's Saloon

👤 Customer Details:
Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email}

💈 Service Details:
Service: ${bookingData.service}
Date: ${bookingData.date ? format(bookingData.date, 'dd/MM/yyyy') : 'Not selected'}
Time: ${bookingData.time}

💰 Payment Details:
Amount Paid: ₹${bookingData.amount}
Payment ID: ${bookingData.paymentId}

📍 Location: https://maps.app.goo.gl/s9cBShjYepJNiKtz7`;

      await fetch(`https://api.telegram.org/bot7723612179:AAFgj800A9GYSXid4D42B64EYl9RvmGEKWE/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '5674316253',
          text: telegramMessage
        })
      });
    } catch (error) {
      console.error('Failed to send confirmation:', error);
    }
  };

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Only return null if modal is not open
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-[#2C2C2C] text-white font-poppins max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-white">
            Book Your Service
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Service Details - Only show if service prop is passed */}
          {service && (
            <div className="bg-[#2C2C2C] p-4 rounded-lg">
              <h3 className="text-xl font-playfair text-[#FFD700] mb-2">{service.name}</h3>
              <p className="text-gray-300 text-sm mb-2">{service.description}</p>
              <p className="text-2xl font-bold text-[#FFD700]">{service.price}</p>
            </div>
          )}

          {/* Booking Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="bg-[#2C2C2C] border-gray-600 text-white placeholder-gray-400 focus:border-[#FFD700]"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-white">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter 10-digit phone number"
                maxLength={10}
                className="bg-[#2C2C2C] border-gray-600 text-white placeholder-gray-400 focus:border-[#FFD700]"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
                className="bg-[#2C2C2C] border-gray-600 text-white placeholder-gray-400 focus:border-[#FFD700]"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Service Selection - Only show if no service passed as prop */}
            {!service && (
              <div>
                <Label htmlFor="service" className="text-white">Select Service *</Label>
                <Select value={formData.selectedService} onValueChange={(value) => handleInputChange('selectedService', value)}>
                  <SelectTrigger className="bg-[#2C2C2C] border-gray-600 text-white focus:border-[#FFD700]">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2C2C2C] border-gray-600 text-white max-h-60">
                    {availableServices.map((serviceOption) => (
                      <SelectItem key={serviceOption.value} value={serviceOption.label} className="text-white hover:bg-[#3C3C3C]">
                        {serviceOption.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.selectedService && <p className="text-red-400 text-sm mt-1">{errors.selectedService}</p>}
              </div>
            )}

            {/* Date Selection */}
            <div>
              <Label className="text-white">Preferred Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-[#2C2C2C] border-gray-600 text-white hover:bg-[#3C3C3C] focus:border-[#FFD700]",
                      !formData.date && "text-gray-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#2C2C2C] border-gray-600" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => handleInputChange('date', date)}
                    disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                    initialFocus
                    className="pointer-events-auto text-white"
                  />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
            </div>

            {/* Time Selection */}
            <div>
              <Label className="text-white">Preferred Time *</Label>
              <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                <SelectTrigger className="bg-[#2C2C2C] border-gray-600 text-white focus:border-[#FFD700]">
                  <Clock className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Choose a time slot" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C2C2C] border-gray-600 text-white max-h-60">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time} className="text-white hover:bg-[#3C3C3C]">
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
            </div>
          </div>
          
          {/* Payment Status */}
          {!razorpayLoaded && (
            <div className="text-yellow-400 text-sm text-center">
              Loading payment system...
            </div>
          )}
          
          {/* Test Mode Warning */}
          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-3">
            <p className="text-yellow-300 text-xs text-center">
              🧪 Test Mode: Use card 4111 1111 1111 1111, any CVV, future date
            </p>
          </div>
          
          {/* Payment Button */}
          <Button 
            onClick={handlePayment}
            disabled={isProcessing || !razorpayLoaded}
            className="w-full bg-[#FFD700] text-black font-semibold py-3 rounded-lg hover:bg-[#FFD700]/90 hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : !razorpayLoaded ? (
              'Loading Payment System...'
            ) : (
              `Proceed to Pay ${service ? service.price : (formData.selectedService ? formData.selectedService.split(' - ')[1] : 'Amount')}`
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
