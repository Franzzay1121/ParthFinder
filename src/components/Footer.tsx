import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = {
    explore: [
      { label: t('nav.careers'), to: '/careers' },
      { label: t('nav.quiz'), to: '/quiz' },
      { label: t('nav.roadmaps'), to: '/roadmaps' },
      { label: t('nav.mentorship'), to: '/mentorship' },
    ],
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Careers', to: '/jobs' },
      { label: 'Contact', to: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Cookie Policy', to: '/cookies' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Compass className="w-5 h-5 text-primary-foreground" />
              </div>
              <span>PathFinder</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PathFinder. {t('footer.rights')}
          </p>
          <p className="text-sm text-muted-foreground">Author: Francis/Franzzay</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for the next generation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
