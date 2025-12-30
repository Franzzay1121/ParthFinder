import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Clock, CheckCircle, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const roadmaps = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'Master modern web development from HTML basics to React mastery',
    duration: '6 months',
    modules: 12,
    level: 'Beginner Friendly',
    color: 'from-primary to-primary/70',
  },
  {
    id: 2,
    title: 'Data Scientist',
    description: 'Learn Python, statistics, and machine learning from scratch',
    duration: '9 months',
    modules: 15,
    level: 'Intermediate',
    color: 'from-accent to-accent/70',
  },
  {
    id: 3,
    title: 'UX Designer',
    description: 'Design user-centered experiences with industry-standard tools',
    duration: '4 months',
    modules: 8,
    level: 'Beginner Friendly',
    color: 'from-primary to-primary/70',
  },
  {
    id: 4,
    title: 'Digital Marketer',
    description: 'Master SEO, social media, content marketing, and analytics',
    duration: '5 months',
    modules: 10,
    level: 'Beginner Friendly',
    color: 'from-accent to-accent/70',
  },
];

const sampleMilestones = [
  { title: 'HTML & CSS Fundamentals', completed: true, duration: '2 weeks' },
  { title: 'JavaScript Basics', completed: true, duration: '3 weeks' },
  { title: 'React Fundamentals', completed: false, current: true, duration: '4 weeks' },
  { title: 'State Management', completed: false, locked: true, duration: '2 weeks' },
  { title: 'API Integration', completed: false, locked: true, duration: '3 weeks' },
  { title: 'Advanced Patterns', completed: false, locked: true, duration: '4 weeks' },
];

const RoadmapsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Learning Roadmaps | PathFinder</title>
        <meta name="description" content="Follow step-by-step learning roadmaps from beginner to expert with curated resources and milestones." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Learning Roadmaps
              </h1>
              <p className="text-lg text-muted-foreground">
                Follow structured paths from beginner to expert with curated resources, milestones, and progress tracking.
              </p>
            </div>

            {/* Featured Roadmap */}
            <div className="bg-card rounded-2xl p-8 shadow-card mb-12 border border-border/50">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <span className="text-sm font-medium text-primary">Featured Roadmap</span>
                  <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
                    Frontend Developer Path
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    A comprehensive journey from HTML basics to building complex React applications. 
                    Learn industry best practices and build a portfolio of real projects.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>6 months</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span>12 modules</span>
                    </div>
                  </div>

                  <Button variant="hero" size="lg">
                    Start This Path
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Progress Preview */}
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Your Progress</h3>
                  <div className="space-y-3">
                    {sampleMilestones.map((milestone, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          milestone.current
                            ? 'bg-primary/10 border border-primary/30'
                            : milestone.completed
                            ? 'bg-card'
                            : 'opacity-60'
                        }`}
                      >
                        {milestone.completed ? (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        ) : milestone.locked ? (
                          <Lock className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-primary" />
                        )}
                        <div className="flex-1">
                          <span className={`text-sm font-medium ${
                            milestone.current ? 'text-primary' : 'text-foreground'
                          }`}>
                            {milestone.title}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {milestone.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* All Roadmaps */}
            <h2 className="text-2xl font-bold text-foreground mb-6">All Roadmaps</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {roadmaps.map((roadmap) => (
                <div
                  key={roadmap.id}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 group"
                >
                  <div className={`w-12 h-2 rounded-full bg-gradient-to-r ${roadmap.color} mb-4`} />
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {roadmap.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {roadmap.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{roadmap.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{roadmap.modules} modules</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {roadmap.level}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      View Path
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RoadmapsPage;
