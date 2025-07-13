import React, { useState } from 'react';
import Layout from '@/components/Layout';
import BookingModal from '@/components/BookingModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      category: 'Hair Cuts',
      items: [
        {
          name: 'Men\'s Haircut',
          price: '₹100',
          description: 'Professional haircut tailored to your style',
          features: ['Consultation', 'Precision Cut', 'Wash & Style', 'Finishing'],
          image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400'
        },
        {
          name: 'Shaving',
          price: '₹50',
          description: 'Classic clean shave with premium products',
          features: ['Hot Towel', 'Premium Razor', 'Aftershave', 'Face Massage'],
          image: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400'
        },
        {
          name: 'Trimming',
          price: '₹50',
          description: 'Beard and mustache trimming service',
          features: ['Precision Trimming', 'Shape Design', 'Styling', 'Finishing'],
          image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400'
        }
      ]
    },
    {
      category: 'Hair Spa',
      items: [
        {
          name: 'L\'Oreal Spa',
          price: '₹600',
          description: 'Premium L\'Oreal hair spa treatment',
          features: ['Scalp Analysis', 'Deep Conditioning', 'Steam Treatment', 'Head Massage'],
          image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400'
        },
        {
          name: 'Anti-Dandruff Treatment',
          price: '₹750',
          description: 'Specialized anti-dandruff scalp treatment',
          features: ['Scalp Cleansing', 'Anti-Dandruff Therapy', 'Moisturizing', 'Protection'],
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400'
        }
      ]
    },
    {
      category: 'Facials',
      items: [
        {
          name: 'Glow Facial',
          price: '₹349',
          description: 'Basic glow enhancement facial',
          features: ['Deep Cleansing', 'Exfoliation', 'Face Mask', 'Moisturizing'],
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400'
        },
        {
          name: 'Gold Facial',
          price: '₹399',
          description: 'Luxurious gold-infused facial treatment',
          features: ['Gold Mask', 'Anti-aging', 'Skin Brightening', 'Premium Care'],
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400'
        },
        {
          name: 'Fruit Facial',
          price: '₹699',
          description: 'Natural fruit-based facial therapy',
          features: ['Fruit Extracts', 'Vitamin Boost', 'Natural Glow', 'Skin Nourishment'],
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400'
        },
        {
          name: 'ASB Papaya Facial',
          price: '₹799',
          description: 'Advanced papaya enzyme facial',
          features: ['Enzyme Therapy', 'Skin Renewal', 'Brightening', 'Anti-aging'],
          image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400'
        },
        {
          name: 'ASB Skin Whitening',
          price: '₹999',
          description: 'Professional skin whitening treatment',
          features: ['Pigmentation Removal', 'Skin Lightening', 'Even Tone', 'UV Protection'],
          image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400'
        },
        {
          name: 'Raga Strawberry',
          price: '₹1799',
          description: 'Premium Raga strawberry facial',
          features: ['Strawberry Extracts', 'Deep Hydration', 'Anti-oxidants', 'Luxury Care'],
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400'
        },
        {
          name: 'Raga Platinum',
          price: '₹2299',
          description: 'Ultimate platinum facial experience',
          features: ['Platinum Infusion', 'Advanced Anti-aging', 'Skin Firming', 'Premium Results'],
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400'
        },
        {
          name: 'La Mariniere',
          price: '₹2999',
          description: 'Exclusive French luxury facial',
          features: ['French Techniques', 'Luxury Products', 'Complete Rejuvenation', 'Premium Experience'],
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
        },
        {
          name: 'Skin Miracle Facial',
          price: '₹3499',
          description: 'Revolutionary skin transformation',
          features: ['Advanced Technology', 'Instant Results', 'Skin Regeneration', 'Miracle Treatment'],
          image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400'
        },
        {
          name: 'O3+ Bridal Kit',
          price: '₹3999',
          description: 'Complete bridal facial package',
          features: ['Pre-wedding Prep', 'Glow Enhancement', 'Complete Package', 'Bridal Ready'],
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400'
        }
      ]
    },
    {
      category: 'Hair Color',
      items: [
        {
          name: 'L\'Oreal Color',
          price: '₹599',
          description: 'Premium L\'Oreal hair coloring',
          features: ['Professional Color', 'Long-lasting', 'Damage Protection', 'Natural Look'],
          image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400'
        },
        {
          name: 'Raga Color',
          price: '₹399',
          description: 'Quality Raga hair coloring service',
          features: ['Natural Shades', 'Gentle Formula', 'Even Coverage', 'Shine Enhancement'],
          image: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400'
        },
        {
          name: 'Non-Ammonia Colors',
          price: '₹649',
          description: 'Gentle ammonia-free hair coloring',
          features: ['Ammonia-free', 'Gentle on Hair', 'Natural Results', 'Scalp Friendly'],
          image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400'
        },
        {
          name: 'L\'Oreal Innov',
          price: '₹649',
          description: 'Advanced L\'Oreal innovation color',
          features: ['Latest Technology', 'Superior Coverage', 'Lasting Color', 'Professional Results'],
          image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400'
        }
      ]
    },
    {
      category: 'Oil Massage',
      items: [
        {
          name: 'Navratna Oil',
          price: '₹200',
          description: 'Traditional Navratna oil massage',
          features: ['Cooling Effect', 'Stress Relief', 'Hair Nourishment', 'Relaxation'],
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400'
        },
        {
          name: 'Coconut Oil',
          price: '₹200',
          description: 'Pure coconut oil scalp massage',
          features: ['Natural Moisturizing', 'Hair Strengthening', 'Scalp Health', 'Shine Enhancement'],
          image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400'
        },
        {
          name: 'Olive Oil',
          price: '₹250',
          description: 'Premium olive oil treatment',
          features: ['Deep Conditioning', 'Antioxidant Rich', 'Hair Repair', 'Natural Nourishment'],
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400'
        },
        {
          name: 'Almond Oil',
          price: '₹250',
          description: 'Nourishing almond oil massage',
          features: ['Vitamin E Rich', 'Hair Growth', 'Scalp Nourishment', 'Softness'],
          image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400'
        }
      ]
    },
    {
      category: 'D-Tan',
      items: [
        {
          name: 'Raga D-Tan',
          price: '₹399',
          description: 'Premium Raga de-tan treatment',
          features: ['Tan Removal', 'Skin Brightening', 'Even Tone', 'Instant Results'],
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400'
        },
        {
          name: 'D-Tan',
          price: '₹349',
          description: 'Professional de-tan therapy',
          features: ['Sun Damage Repair', 'Skin Restoration', 'Natural Glow', 'Gentle Treatment'],
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400'
        }
      ]
    },
    {
      category: 'Bleach',
      items: [
        {
          name: 'Cleansing',
          price: '₹49',
          description: 'Basic skin cleansing service',
          features: ['Deep Cleansing', 'Pore Opening', 'Fresh Feel', 'Clean Skin'],
          image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400'
        },
        {
          name: 'Face Massage',
          price: '₹99',
          description: 'Relaxing facial massage',
          features: ['Stress Relief', 'Blood Circulation', 'Muscle Relaxation', 'Rejuvenation'],
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400'
        },
        {
          name: 'Milk Massage',
          price: '₹199',
          description: 'Nourishing milk-based massage',
          features: ['Skin Softening', 'Hydration', 'Natural Glow', 'Gentle Care'],
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
        },
        {
          name: 'Fruit Bleach',
          price: '₹249',
          description: 'Natural fruit-based bleaching',
          features: ['Natural Ingredients', 'Gentle Lightening', 'Skin Brightening', 'Fresh Feel'],
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400'
        },
        {
          name: 'Glow Bleach',
          price: '₹299',
          description: 'Enhanced glow bleaching treatment',
          features: ['Instant Glow', 'Skin Lightening', 'Radiance Boost', 'Professional Results'],
          image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400'
        },
        {
          name: 'Gold Bleach',
          price: '₹399',
          description: 'Luxury gold-infused bleaching',
          features: ['Gold Particles', 'Premium Treatment', 'Skin Brightening', 'Luxury Experience'],
          image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400'
        }
      ]
    },
    {
      category: 'Combos',
      items: [
        {
          name: 'Haircut + L\'Oreal Color + Fruit Bleach',
          price: '₹799',
          description: 'Complete styling combo package',
          features: ['Haircut', 'Premium Color', 'Fruit Bleach', 'Complete Makeover'],
          image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400'
        },
        {
          name: 'Haircut + Raga D-Tan + Papaya Facial',
          price: '₹899',
          description: 'Grooming and facial combo',
          features: ['Professional Haircut', 'D-Tan Treatment', 'Papaya Facial', 'Complete Care'],
          image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400'
        },
        {
          name: 'Haircut + Raga D-Tan + Skin Whitening',
          price: '₹1199',
          description: 'Premium grooming package',
          features: ['Precision Cut', 'D-Tan', 'Skin Whitening', 'Advanced Care'],
          image: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400'
        },
        {
          name: 'Haircut + Advanced D-Tan + Wine Facial',
          price: '₹1499',
          description: 'Luxury grooming experience',
          features: ['Expert Haircut', 'Advanced D-Tan', 'Wine Facial', 'Premium Service'],
          image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400'
        },
        {
          name: 'Haircut + Raga D-Tan + Raga Gold Facial',
          price: '₹1999',
          description: 'Ultimate grooming package',
          features: ['Precision Haircut', 'Raga D-Tan', 'Gold Facial', 'Luxury Treatment'],
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400'
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of premium grooming services, each designed to enhance your style and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-playfair font-semibold text-foreground">
                          {service.name}
                        </h3>
                        <span className="text-2xl font-bold text-primary">
                          {service.price}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-1 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="btn-gold w-full"
                        onClick={() => setSelectedService(service)}
                      >
                        Get This Service
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </Layout>
  );
};

export default Services;
