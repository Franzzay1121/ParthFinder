import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CareerCategoriesSection from '@/components/CareerCategoriesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>PathFinder - Discover Your Career Path</title>
        <meta name="description" content="PathFinder helps young people discover career paths that match their unique strengths, interests, and values. Take our quiz and find your direction." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <CareerCategoriesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
