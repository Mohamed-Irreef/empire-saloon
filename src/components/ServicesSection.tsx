import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scissors, Sparkles, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import serviceHaircutImage from '@/assets/service-haircut.jpg';
import serviceFacialImage from '@/assets/service-facial.jpg';
import serviceGroomingImage from '@/assets/service-grooming.jpg';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (index: number) => {
    navigate('/services', { state: { scrollToCategory: index } });
  };

  const services = [
    {
      icon: Scissors,
      title: 'Premium Haircuts',
      description: 'Expert styling with precision cuts tailored to your face shape and lifestyle',
      features: ['Consultation', 'Precision Cut', 'Styling', 'Beard Trim'],
      price: 'From ₹300',
      image: serviceHaircutImage
    },
    {
      icon: Sparkles,
      title: 'Luxury Facials',
      description: 'Rejuvenating treatments for healthy, glowing skin using premium products',
      features: ['Deep Cleansing', 'Exfoliation', 'Moisturizing', 'Anti-aging'],
      price: 'From ₹800',
      image: serviceFacialImage
    },
    {
      icon: UserCheck,
      title: 'Complete Grooming',
      description: 'Full-service packages for the complete gentleman experience',
      features: ['Haircut + Shave', 'Facial Treatment', 'Head Massage', 'Styling'],
      price: 'From ₹1200',
      image: serviceGroomingImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our <span className="text-primary">Premium</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience luxury grooming services designed for the modern gentleman. 
            Each service is crafted with attention to detail and premium products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden cursor-pointer"
              onClick={() => handleServiceClick(index)}
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-8">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={48} />
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-2">
                    <ArrowRight size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button className="btn-gold text-lg px-8 py-4">
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;