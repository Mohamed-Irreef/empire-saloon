import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Clock, Users, Award, Shield, Heart, Target, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ownerPhoto from '@/assets/owner-photo.jpg';

const About = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    stylists: 0,
    rating: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { years: 5, clients: 1000, stylists: 8, rating: 5.0 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          years: Math.floor(targets.years * progress),
          clients: Math.floor(targets.clients * progress),
          stylists: Math.floor(targets.stylists * progress),
          rating: Number((targets.rating * progress).toFixed(1))
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, increment);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    });

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To be the premier destination for luxury men\'s grooming, setting new standards in the industry.'
    },
    {
      icon: Heart,
      title: 'Our Mission', 
      description: 'Providing exceptional grooming experiences that enhance confidence and style for every gentleman.'
    },
    {
      icon: Shield,
      title: 'Hygiene Standards',
      description: 'Maintaining the highest levels of cleanliness and sanitation for your safety and peace of mind.'
    },
    {
      icon: Award,
      title: 'Customer Loyalty',
      description: 'Building lasting relationships through consistent quality service and personalized attention.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              About <span className="text-primary">Empire</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded with a passion for excellence, Empire Men's Saloon has been redefining the grooming experience for the modern gentleman. Our commitment to luxury, precision, and personalized service sets us apart in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters.years}+
              </div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters.clients}+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters.stylists}
              </div>
              <div className="text-muted-foreground">Expert Stylists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters.rating}
              </div>
              <div className="text-muted-foreground">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything we do is guided by our core values, ensuring every client receives the exceptional experience they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary flex-shrink-0">
                      <value.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-16 text-center">
              Meet Our <span className="text-primary">Founder</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Owner Photo */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={ownerPhoto}
                    alt="Founder & Head Stylist"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>

              {/* Owner Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-2">
                    Rajesh Kumar
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-6">
                    Founder & Head Stylist
                  </p>
                  
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      With over 15 years of experience in the grooming industry, Rajesh Kumar founded Empire Men's Saloon with a vision to revolutionize men's grooming in India.
                    </p>
                    
                    <p>
                      Trained in both traditional barbering techniques and modern styling methods, Rajesh brings unparalleled expertise and passion to every service. His commitment to excellence has made Empire a trusted name among discerning gentlemen.
                    </p>
                    
                    <p>
                      "Every man deserves to look and feel his absolute best. That's not just our motto - it's our promise," says Rajesh.
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-foreground mb-4">
                    Connect with Rajesh
                  </h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/empiremensaloon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-card border border-border p-3 rounded-full hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href="https://facebook.com/empiremensaloon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-card border border-border p-3 rounded-full hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Facebook size={24} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/rajeshkumar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-card border border-border p-3 rounded-full hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8 text-center">
              Our <span className="text-primary">Story</span>
            </h2>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Empire Men's Saloon was born from a simple yet powerful vision: to create a space where modern gentlemen could experience the perfect blend of traditional barbering craftsmanship and contemporary luxury.
              </p>
              
              <p>
                Our journey began with a commitment to excellence that goes beyond just haircuts and grooming. We believe that every man deserves to look and feel his absolute best, and we've built our reputation on delivering precisely that experience.
              </p>
              
              <p>
                Today, Empire Men's Saloon stands as a testament to our dedication to quality, innovation, and customer satisfaction. Our team of expert stylists brings years of experience and ongoing training to ensure we stay at the forefront of men's grooming trends and techniques.
              </p>
              
              <p>
                From our premium products to our luxurious ambiance, every detail has been carefully curated to provide an unparalleled grooming experience that leaves our clients feeling confident, refreshed, and ready to conquer the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;