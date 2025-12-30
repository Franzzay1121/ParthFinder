import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ArrowRight, Clock, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const careers = [
  {
    id: 1,
    title: 'Software Engineer',
    category: 'Technology',
    description: 'Design, develop, and maintain software applications and systems.',
    salary: '$80k - $150k',
    growth: 'High',
    skills: ['Programming', 'Problem Solving', 'System Design'],
    timeToLearn: '6-12 months',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    category: 'Creative Arts',
    description: 'Create user-centered designs for digital products and experiences.',
    salary: '$65k - $120k',
    growth: 'High',
    skills: ['Design Thinking', 'Prototyping', 'User Research'],
    timeToLearn: '3-6 months',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'Data Scientist',
    category: 'Technology',
    description: 'Analyze complex data sets to help organizations make better decisions.',
    salary: '$90k - $160k',
    growth: 'Very High',
    skills: ['Statistics', 'Machine Learning', 'Python'],
    timeToLearn: '8-12 months',
    rating: 4.6,
  },
  {
    id: 4,
    title: 'Digital Marketing Manager',
    category: 'Business',
    description: 'Plan and execute digital marketing campaigns across multiple channels.',
    salary: '$60k - $110k',
    growth: 'High',
    skills: ['SEO', 'Content Strategy', 'Analytics'],
    timeToLearn: '4-8 months',
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Product Manager',
    category: 'Business',
    description: 'Lead product development from conception to launch.',
    salary: '$100k - $170k',
    growth: 'High',
    skills: ['Strategy', 'Communication', 'Analytics'],
    timeToLearn: '6-12 months',
    rating: 4.9,
  },
  {
    id: 6,
    title: 'Registered Nurse',
    category: 'Healthcare',
    description: 'Provide patient care and support in medical settings.',
    salary: '$60k - $100k',
    growth: 'High',
    skills: ['Patient Care', 'Critical Thinking', 'Communication'],
    timeToLearn: '2-4 years',
    rating: 4.7,
  },
];

const categories = ['All', 'Technology', 'Creative Arts', 'Business', 'Healthcare', 'Education', 'Engineering'];

const CareersPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCareers = careers.filter((career) => {
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Career Paths | PathFinder</title>
        <meta name="description" content="Explore 50+ career paths with detailed guides, required skills, salary information, and growth potential." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('careers.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('careers.subtitle')}
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search careers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Career Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCareers.map((career) => (
                <div
                  key={career.id}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {career.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      {career.rating}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {career.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {career.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {career.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span>{career.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{career.timeToLearn}</span>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            {filteredCareers.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No careers found matching your criteria.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CareersPage;
