import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, MessageCircle, Calendar, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mentors = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Senior Software Engineer at Google',
    expertise: ['Software Development', 'Career Transitions', 'Tech Interviews'],
    rating: 4.9,
    sessions: 156,
    avatar: 'SC',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Product Director at Stripe',
    expertise: ['Product Management', 'Startup Strategy', 'Leadership'],
    rating: 4.8,
    sessions: 203,
    avatar: 'MJ',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Lead UX Designer at Airbnb',
    expertise: ['UX Design', 'Design Systems', 'Portfolio Reviews'],
    rating: 4.9,
    sessions: 178,
    avatar: 'ER',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Data Science Manager at Netflix',
    expertise: ['Data Science', 'Machine Learning', 'Analytics'],
    rating: 4.7,
    sessions: 134,
    avatar: 'DP',
  },
];

const successStories = [
  {
    id: 1,
    name: 'Alex Thompson',
    before: 'Retail Associate',
    after: 'Frontend Developer',
    story: 'PathFinder helped me discover my passion for coding. Within 8 months, I landed my dream job at a tech startup.',
    avatar: 'AT',
  },
  {
    id: 2,
    name: 'Maria Santos',
    before: 'Marketing Intern',
    after: 'Product Manager',
    story: 'The career quiz opened my eyes to product management. My mentor guided me through the transition perfectly.',
    avatar: 'MS',
  },
  {
    id: 3,
    name: 'James Wilson',
    before: 'College Student',
    after: 'UX Designer',
    story: 'I was completely lost about my career. PathFinder\'s roadmap gave me clarity and structure to succeed.',
    avatar: 'JW',
  },
];

const MentorshipPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mentorship & Success Stories | PathFinder</title>
        <meta name="description" content="Connect with industry mentors and get inspired by real success stories from people who found their path." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Learn from Those Who've Been There
              </h1>
              <p className="text-lg text-muted-foreground">
                Get personalized guidance from industry experts and be inspired by real success stories.
              </p>
            </div>

            {/* Mentors Section */}
            <section className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Featured Mentors</h2>
                <Button variant="ghost">
                  View All Mentors
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 group"
                  >
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                      {mentor.avatar}
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {mentor.role}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {mentor.expertise.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span>{mentor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MessageCircle className="w-4 h-4" />
                        <span>{mentor.sessions} sessions</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Session
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Stories */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
                <p className="text-muted-foreground">
                  Real people who found their path with PathFinder
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {successStories.map((story) => (
                  <div
                    key={story.id}
                    className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
                  >
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    <p className="text-foreground mb-6 leading-relaxed">
                      "{story.story}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-semibold">
                        {story.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{story.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-muted-foreground/60">{story.before}</span>
                          {' → '}
                          <span className="text-primary font-medium">{story.after}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Write Your Success Story?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Join thousands of young people who have discovered their path and built fulfilling careers.
                </p>
                <Button variant="hero" size="lg">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MentorshipPage;
