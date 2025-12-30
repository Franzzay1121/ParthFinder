import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const questions = [
  {
    id: 1,
    question: 'How do you prefer to spend your free time?',
    options: [
      { id: 'a', text: 'Building or creating things', category: 'maker' },
      { id: 'b', text: 'Reading, researching, or learning', category: 'analyst' },
      { id: 'c', text: 'Helping and connecting with others', category: 'helper' },
      { id: 'd', text: 'Organizing and planning activities', category: 'organizer' },
    ],
  },
  {
    id: 2,
    question: 'What type of work environment appeals to you most?',
    options: [
      { id: 'a', text: 'Flexible remote work with creative freedom', category: 'creative' },
      { id: 'b', text: 'Collaborative team in an office setting', category: 'team' },
      { id: 'c', text: 'Independent work with clear objectives', category: 'independent' },
      { id: 'd', text: 'Dynamic environment with varied tasks', category: 'dynamic' },
    ],
  },
  {
    id: 3,
    question: 'Which skill would you most like to develop?',
    options: [
      { id: 'a', text: 'Technical or programming skills', category: 'tech' },
      { id: 'b', text: 'Communication and leadership', category: 'leadership' },
      { id: 'c', text: 'Creative and design abilities', category: 'creative' },
      { id: 'd', text: 'Analytical and problem-solving', category: 'analytical' },
    ],
  },
  {
    id: 4,
    question: 'What motivates you most in work?',
    options: [
      { id: 'a', text: 'Making a positive impact on others', category: 'impact' },
      { id: 'b', text: 'Financial success and stability', category: 'financial' },
      { id: 'c', text: 'Personal growth and learning', category: 'growth' },
      { id: 'd', text: 'Recognition and achievement', category: 'achievement' },
    ],
  },
  {
    id: 5,
    question: 'How do you approach solving problems?',
    options: [
      { id: 'a', text: 'Analyze data and find patterns', category: 'analytical' },
      { id: 'b', text: 'Brainstorm creative solutions', category: 'creative' },
      { id: 'c', text: 'Collaborate with others for input', category: 'collaborative' },
      { id: 'd', text: 'Follow proven methods and processes', category: 'systematic' },
    ],
  },
];

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [question.id]: optionId });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <>
        <Helmet>
          <title>Your Results | PathFinder Quiz</title>
        </Helmet>

        <div className="min-h-screen bg-background">
          <Navbar />
          
          <main className="pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Your Career Profile
                </h1>
                <p className="text-muted-foreground text-lg">
                  Based on your answers, here are your top career matches
                </p>
              </div>

              <div className="space-y-6">
                {/* Top Match */}
                <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Best Match</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Software Engineer</h2>
                  <p className="text-muted-foreground mb-4">
                    Your analytical mindset and problem-solving approach make you an excellent fit for software engineering.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Technology</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">High Growth</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">$80k-$150k</span>
                  </div>
                </div>

                {/* Other Matches */}
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Data Analyst</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Your love for patterns and analysis could thrive in data-driven roles.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">Analytics</span>
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">$70k-$120k</span>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Product Manager</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Your collaborative nature and strategic thinking align well with product management.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">Business</span>
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">$100k-$170k</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="hero" size="lg" className="flex-1">
                  Explore Your Top Match
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleRestart}>
                  Retake Quiz
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Create a free account to save your results and track your progress
              </p>
            </div>
          </main>

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Self-Discovery Quiz | PathFinder</title>
        <meta name="description" content="Take our interactive quiz to discover careers that match your unique strengths, interests, and values." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {question.question}
              </h2>

              <div className="space-y-4">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                      answers[question.id] === option.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        answers[question.id] === option.id
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}>
                        {answers[question.id] === option.id && (
                          <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                        )}
                      </div>
                      <span className="text-foreground font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!answers[question.id]}
                >
                  {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default QuizPage;
