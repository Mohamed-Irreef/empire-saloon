import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
