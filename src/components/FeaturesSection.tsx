import React from 'react';
import { Search, Map, BookOpen, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Search,
      title: t('features.discover.title'),
      description: t('features.discover.desc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Map,
      title: t('features.explore.title'),
      description: t('features.explore.desc'),
      color: 'bg-accent/10 text-accent',
    },
    {
      icon: BookOpen,
      title: t('features.learn.title'),
      description: t('features.learn.desc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Users,
      title: t('features.connect.title'),
      description: t('features.connect.desc'),
      color: 'bg-accent/10 text-accent',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
