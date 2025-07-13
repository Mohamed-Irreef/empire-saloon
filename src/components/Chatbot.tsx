import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! Welcome to Empire Men's Saloon. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedOptions = [
    { text: "Show Facial Services", keyword: "facial" },
    { text: "Hair Cut Prices", keyword: "haircut" },
    { text: "What is Raga Facial?", keyword: "raga" },
    { text: "Opening Hours", keyword: "hours" },
    { text: "Book Appointment", keyword: "book" },
    { text: "Location & Contact", keyword: "contact" }
  ];

  const serviceResponses = {
    facial: `Our Facial Services:
• Glow Facial - ₹349
• Gold Facial - ₹399  
• Fruit Facial - ₹699
• ASB Papaya Facial - ₹799
• ASB Skin Whitening - ₹999
• Raga Strawberry - ₹1799
• Raga Platinum - ₹2299
• La Mariniere - ₹2999
• Skin Miracle Facial - ₹3499
• O3+ Bridal Kit - ₹3999

Would you like to book any of these services?`,
    
    haircut: `Our Hair Services:
• Men's Haircut - ₹100
• Shaving - ₹50
• Trimming - ₹50
• L'Oreal Spa - ₹600
• Anti-Dandruff Treatment - ₹750

All services include consultation and styling!`,
    
    raga: `Raga Facials are our premium treatments:
• Raga Strawberry - ₹1799 (Deep hydration & glow)
• Raga Platinum - ₹2299 (Anti-aging & brightening)
• Raga D-Tan - ₹399 (Tan removal)
• Raga Color - ₹399 (Hair coloring)

These use premium Raga products for best results!`,
    
    hours: `🕒 Opening Hours:
Monday to Sunday: 9:00 AM - 9:00 PM

We're open all week to serve you!
📞 Call: +91 89397 55670`,
    
    book: `To book an appointment:
📞 Call: +91 89397 55670
💬 WhatsApp: Click the green button
🌐 Visit our Services page

We'll confirm your preferred time and service!`,
    
    contact: `📍 Contact Information:
📞 Phone: +91 89397 55670
📧 Email: contact@empiresaloon.com
🏢 Address: Your Location Here
🕒 Hours: Mon-Sun 9AM-9PM

We're here to serve you!`
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const generateBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    // Check for specific keywords
    for (const [key, response] of Object.entries(serviceResponses)) {
      if (input.includes(key)) {
        return response;
      }
    }
    
    // Check for other common keywords
    if (input.includes('price') || input.includes('cost')) {
      return "Here are our popular services with prices:\n• Men's Haircut - ₹100\n• Glow Facial - ₹349\n• Gold Facial - ₹399\n• Raga Strawberry - ₹1799\n\nFor complete price list, visit our Services page!";
    }
    
    if (input.includes('location') || input.includes('address')) {
      return serviceResponses.contact;
    }
    
    if (input.includes('appointment') || input.includes('booking')) {
      return serviceResponses.book;
    }
    
    // Default response
    return "I can help you with:\n• Service prices and details\n• Booking appointments\n• Opening hours\n• Location and contact info\n\nYou can also use the quick options below or visit our Services page for more details!";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    addMessage(messageText, false);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = generateBotResponse(messageText);
      addMessage(botResponse, true);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 h-14 w-14 left-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 floating-animation"
        size="icon"
        aria-label="Open Chatbot"
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 h-[500px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-scale-in flex flex-col">
          {/* Fixed Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center space-x-3 flex-shrink-0">
            <Bot size={24} />
            <div>
              <h4 className="font-semibold">Empire Assistant</h4>
              <p className="text-xs opacity-90">Online now</p>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted"
               style={{ scrollBehavior: 'smooth' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                }`}>
                  <div className={`p-2 rounded-full ${
                    message.isBot ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {message.isBot ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.isBot 
                      ? 'bg-muted text-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-primary text-primary-foreground">
                    <Bot size={16} />
                  </div>
                  <div className="bg-muted text-foreground p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          <div className="px-4 py-3 border-t border-border bg-card flex-shrink-0">
            <div className="grid grid-cols-2 gap-2">
              {predefinedOptions.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-8 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  onClick={() => handleSendMessage(option.text)}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-card flex-shrink-0">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-sm"
              />
              <Button
                onClick={() => handleSendMessage()}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;