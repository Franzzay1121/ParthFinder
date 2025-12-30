import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Stethoscope, 
  GraduationCap, 
  Building2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CareerCategoriesSection: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Code,
      title: 'Technology',
      description: 'Software development, AI, cybersecurity, and more',
      careers: ['Software Engineer', 'Data Scientist', 'UX Designer'],
      color: 'from-primary to-primary/70',
      iconBg: 'bg-primary/10 text-primary',
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Design, media, entertainment, and visual arts',
      careers: ['Graphic Designer', 'Content Creator', 'Animator'],
      color: 'from-accent to-accent/70',
      iconBg: 'bg-accent/10 text-accent',
    },
    {
      icon: TrendingUp,
      title: 'Business',
      description: 'Marketing, finance, entrepreneurship, and management',
      careers: ['Marketing Manager', 'Financial Analyst', 'Entrepreneur'],
      color: 'from-primary to-primary/70',
      iconBg: 'bg-primary/10 text-primary',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Medicine, nursing, therapy, and public health',
      careers: ['Nurse', 'Physical Therapist', 'Health Administrator'],
      color: 'from-accent to-accent/70',
      iconBg: 'bg-accent/10 text-accent',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Teaching, training, curriculum development',
      careers: ['Teacher', 'Corporate Trainer', 'Education Consultant'],
      color: 'from-primary to-primary/70',
      iconBg: 'bg-primary/10 text-primary',
    },
    {
      icon: Building2,
      title: 'Engineering',
      description: 'Civil, mechanical, electrical, and environmental',
      careers: ['Civil Engineer', 'Mechanical Engineer', 'Architect'],
      color: 'from-accent to-accent/70',
      iconBg: 'bg-accent/10 text-accent',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('careers.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('careers.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={`/careers?category=${category.title.toLowerCase()}`}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/30">
                <div className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.careers.map((career) => (
                    <span
                      key={career}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {career}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-primary text-sm font-medium">
                  Explore paths
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/careers">
            <Button variant="outline" size="lg">
              View All Career Paths
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerCategoriesSection;
