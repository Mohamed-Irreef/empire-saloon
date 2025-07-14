import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { X, ZoomIn, Star, Heart, Eye } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
      alt: 'Premium Haircut Service',
      category: 'Haircuts',
      featured: true,
      likes: 124
    },
    {
      src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600',
      alt: 'Modern Styling',
      category: 'Styling',
      featured: false,
      likes: 89
    },
    {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
      alt: 'Facial Treatment',
      category: 'Facials',
      featured: true,
      likes: 156
    },
    {
      src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600',
      alt: 'Luxury Spa Treatment',
      category: 'Spa',
      featured: false,
      likes: 78
    },
    {
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
      alt: 'Hair Spa Service',
      category: 'Hair Spa',
      featured: true,
      likes: 203
    },
    {
      src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600',
      alt: 'Complete Grooming',
      category: 'Grooming',
      featured: false,
      likes: 95
    },
    {
     src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600',
      alt: 'Beard Grooming',
      category: 'Beard Care',
      featured: true,
      likes: 167
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      alt: 'Salon Interior',
      category: 'Interior',
      featured: false,
      likes: 134
    },
    {
       src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
      alt: 'Professional Tools',
      category: 'Equipment',
      featured: false,
      likes: 67
    },
    {
      src: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600',
      alt: 'Professional Hair Wash',
      category: 'Hair Care',
      featured: true,
      likes: 189
    },
    {
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
      alt: 'Luxury Beard Care',
      category: 'Beard Care',
      featured: false,
      likes: 142
    },
    {
      src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600',
      alt: 'Premium Massage',
      category: 'Massage',
      featured: true,
      likes: 198
    },
    {
      src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600',
      alt: 'Classic Barbering',
      category: 'Haircuts',
      featured: false,
      likes: 176
    },
    {
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
      alt: 'Skincare Treatment',
      category: 'Facials',
      featured: true,
      likes: 213
    },
    {
      src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600',
      alt: 'Hot Towel Service',
      category: 'Grooming',
      featured: false,
      likes: 156
    },
    {
      src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600',
      alt: 'Vintage Barbershop',
      category: 'Interior',
      featured: true,
      likes: 234
    },
    {
      src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600',
      alt: 'Hair Color Service',
      category: 'Hair Color',
      featured: false,
      likes: 167
    },
    {
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
      alt: 'Professional Shaving',
      category: 'Shaving',
      featured: true,
      likes: 145
    },
    {
      src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600',
      alt: 'Head Massage',
      category: 'Massage',
      featured: false,
      likes: 178
    },
    {
      src: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=600',
      alt: 'Modern Salon Setup',
      category: 'Interior',
      featured: false,
      likes: 123
    }
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background via-background/80 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Our <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the artistry behind every transformation. Witness our premium services, expert craftsmanship, and the luxurious ambiance that defines Empire Men's Saloon.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto mt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">5★</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Featured Badge */}
                {image.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      <Star size={12} className="mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs">
                        <Heart size={12} className="text-red-400" />
                        <span>{image.likes}</span>
                      </div>
                    </div>
                    <h3 className="text-sm font-medium mb-2">{image.alt}</h3>
                    <div className="flex items-center justify-center space-x-2 text-xs bg-white/20 rounded-full py-2 px-4 backdrop-blur-sm">
                      <ZoomIn size={14} />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-[95vw] h-auto p-0 bg-transparent border-none overflow-hidden">
          {selectedImage && (
            <div className="relative bg-background rounded-xl overflow-hidden">
              <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src={selectedImage.src.replace('w=600', 'w=1200')}
                  alt={selectedImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{selectedImage.category}</Badge>
                      {selectedImage.featured && (
                        <Badge className="bg-primary/10 text-primary border border-primary/20">
                          <Star size={12} className="mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{selectedImage.alt}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart size={14} className="text-red-500" />
                        <span>{selectedImage.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>Premium Quality</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;