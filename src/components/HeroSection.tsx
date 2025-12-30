import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your future starts here</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}{' '}
            <span className="text-gradient">{t('hero.subtitle')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/quiz">
              <Button variant="hero" size="xl" className="group">
                {t('hero.cta.quiz')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/careers">
              <Button variant="hero-outline" size="xl">
                {t('hero.cta.explore')}
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Career Paths</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient">200+</div>
              <div className="text-sm text-muted-foreground mt-1">Mentors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
