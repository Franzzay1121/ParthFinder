import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ThemeToggle from './ThemeToggle';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/careers', label: t('nav.careers') },
    { to: '/quiz', label: t('nav.quiz') },
    { to: '/roadmaps', label: t('nav.roadmaps') },
    { to: '/mentorship', label: t('nav.mentorship') },
  ];

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      {/* Marquee: scrolling announcements */}
      <div className="w-full marquee bg-gradient-accent/5 border-b border-border/30">
        <div className="marquee-track px-4 md:px-8">
          <span className="marquee-item">🔥 New: Updated Roadmaps — check the latest career tracks</span>
          <span className="marquee-item">🎓 Mentorship cohorts opening — apply now</span>
          <span className="marquee-item">✨ Join our community on Discord for weekly sessions</span>
          <span className="marquee-item">🚀 Sign up to get personalized recommendations</span>
          <span className="marquee-item">🔥 New: Updated Roadmaps — check the latest career tracks</span>
          <span className="marquee-item">🎓 Mentorship cohorts opening — apply now</span>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow">
              <Compass className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>PathFinder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage?.flag}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`gap-2 ${language === lang.code ? 'bg-primary/10 text-primary' : ''}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/signin">
              <Button variant="ghost" size="sm">
                {t('nav.signin')}
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">
                {t('nav.signup')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="h-px bg-border my-2" />
              
              {/* Mobile Language Selector */}
              <div className="px-4 py-2 flex items-center gap-3">
                <ThemeToggle />
              </div>
              
              <div className="px-4 py-2">
                <p className="text-xs text-muted-foreground mb-2">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                        language === lang.code
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="h-px bg-border my-2" />
              
              <div className="flex gap-2 px-4">
                <Link to="/signin" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    {t('nav.signin')}
                  </Button>
                </Link>
                <Link to="/signup" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">
                    {t('nav.signup')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
