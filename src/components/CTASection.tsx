import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Start your journey today</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Discover Your True Potential?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Take our free self-discovery quiz and get personalized career recommendations based on your unique strengths and interests.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quiz">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                Take the Free Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                variant="ghost" 
                size="xl" 
                className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              >
                Create Free Account
              </Button>
            </Link>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-6">
            No credit card required • Takes only 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
