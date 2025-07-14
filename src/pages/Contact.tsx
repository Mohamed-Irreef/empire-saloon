import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    const telegramMessage = `📧 New Contact Form Submission from Empire Men's Saloon Website

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || 'Not provided'}

💬 Message:
${formData.message}

Please respond to the customer promptly.`;

    try {
      // Send to Telegram
      const telegramResponse = await fetch(`https://api.telegram.org/bot7723612179:AAFgj800A9GYSXid4D42B64EYl9RvmGEKWE/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '5674316253',
          text: telegramMessage
        })
      });

      if (telegramResponse.ok) {
        alert('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Please call us directly.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 89397 55670',
      action: 'tel:+918939755670'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'contact@empiresaloon.com',
      action: 'mailto:contact@empiresaloon.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Sithalapakkam, Chennai-600126',
      action: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      detail: 'Mon - Sun: 9:00 AM - 9:00 PM',
      action: null
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us to book your appointment or ask any questions. We're here to provide you with the best grooming experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <info.icon size={32} />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.detail}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="bg-input border-border text-foreground"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email address"
                    className="bg-input border-border text-foreground"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter your phone number"
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help you..."
                    className="bg-input border-border text-foreground min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="btn-gold w-full">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                Find Us
              </h2>
              
              <div className="bg-background rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1072806904!2d77.58726531482141!3d12.957063290864753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e12b4b6a5f%3A0x42f1e4a5e5f1e4a5!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1629870000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Empire Men's Saloon Location"
                ></iframe>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <a 
                    href="tel:+918939755670"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +91 89397 55670
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <a 
                    href="mailto:contact@empiresaloon.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    contact@empiresaloon.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait to experience the luxury of Empire Men's Saloon. Book your appointment today and discover why we're the premier choice for discerning gentlemen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918939755670">
              <Button className="btn-gold">
                <Phone className="mr-2" size={20} />
                Call Now to Book
              </Button>
            </a>
            <a href="https://wa.me/918939755670" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="btn-outline-gold">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;