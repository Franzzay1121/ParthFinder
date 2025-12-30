import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', es: 'Inicio', fr: 'Accueil', de: 'Startseite', pt: 'Início' },
  'nav.careers': { en: 'Career Paths', es: 'Carreras', fr: 'Carrières', de: 'Karrierewege', pt: 'Carreiras' },
  'nav.quiz': { en: 'Discover Yourself', es: 'Descúbrete', fr: 'Découvrez-vous', de: 'Entdecke dich', pt: 'Descubra-se' },
  'nav.roadmaps': { en: 'Roadmaps', es: 'Rutas', fr: 'Parcours', de: 'Lernpfade', pt: 'Roteiros' },
  'nav.mentorship': { en: 'Mentorship', es: 'Mentoría', fr: 'Mentorat', de: 'Mentoring', pt: 'Mentoria' },
  'nav.signin': { en: 'Sign In', es: 'Iniciar Sesión', fr: 'Connexion', de: 'Anmelden', pt: 'Entrar' },
  'nav.signup': { en: 'Get Started', es: 'Comenzar', fr: 'Commencer', de: 'Loslegen', pt: 'Começar' },
  
  // Hero
  'hero.title': { en: 'Discover Your Path', es: 'Descubre Tu Camino', fr: 'Découvrez Votre Voie', de: 'Entdecke Deinen Weg', pt: 'Descubra Seu Caminho' },
  'hero.subtitle': { en: 'to a Fulfilling Career', es: 'hacia una Carrera Satisfactoria', fr: 'vers une Carrière Épanouissante', de: 'zu einer erfüllenden Karriere', pt: 'para uma Carreira Gratificante' },
  'hero.description': { en: 'Feeling lost about your future? PathFinder helps you explore careers that match your unique strengths, interests, and values.', es: '¿Te sientes perdido sobre tu futuro? PathFinder te ayuda a explorar carreras que coinciden con tus fortalezas, intereses y valores únicos.', fr: 'Vous vous sentez perdu concernant votre avenir? PathFinder vous aide à explorer des carrières correspondant à vos forces, intérêts et valeurs uniques.', de: 'Fühlen Sie sich unsicher über Ihre Zukunft? PathFinder hilft Ihnen, Karrieren zu erkunden, die zu Ihren einzigartigen Stärken, Interessen und Werten passen.', pt: 'Sentindo-se perdido sobre seu futuro? PathFinder ajuda você a explorar carreiras que combinam com suas forças, interesses e valores únicos.' },
  'hero.cta.quiz': { en: 'Take the Quiz', es: 'Hacer el Test', fr: 'Faire le Quiz', de: 'Quiz starten', pt: 'Fazer o Quiz' },
  'hero.cta.explore': { en: 'Explore Careers', es: 'Explorar Carreras', fr: 'Explorer les Carrières', de: 'Karrieren erkunden', pt: 'Explorar Carreiras' },
  
  // Features
  'features.title': { en: 'How PathFinder Works', es: 'Cómo Funciona PathFinder', fr: 'Comment Fonctionne PathFinder', de: 'So funktioniert PathFinder', pt: 'Como o PathFinder Funciona' },
  'features.discover.title': { en: 'Discover Yourself', es: 'Descúbrete', fr: 'Découvrez-vous', de: 'Entdecke dich selbst', pt: 'Descubra-se' },
  'features.discover.desc': { en: 'Take our interactive quiz to uncover your strengths, interests, and ideal work environment.', es: 'Realiza nuestro quiz interactivo para descubrir tus fortalezas, intereses y ambiente de trabajo ideal.', fr: 'Passez notre quiz interactif pour découvrir vos forces, intérêts et environnement de travail idéal.', de: 'Machen Sie unser interaktives Quiz, um Ihre Stärken, Interessen und ideale Arbeitsumgebung zu entdecken.', pt: 'Faça nosso quiz interativo para descobrir suas forças, interesses e ambiente de trabalho ideal.' },
  'features.explore.title': { en: 'Explore Paths', es: 'Explora Caminos', fr: 'Explorez les Voies', de: 'Wege erkunden', pt: 'Explore Caminhos' },
  'features.explore.desc': { en: 'Browse curated career paths with detailed guides, required skills, and real success stories.', es: 'Explora carreras curadas con guías detalladas, habilidades requeridas e historias de éxito reales.', fr: 'Parcourez des parcours professionnels avec des guides détaillés, compétences requises et histoires de réussite.', de: 'Durchsuchen Sie kuratierte Karrierewege mit detaillierten Anleitungen, erforderlichen Fähigkeiten und Erfolgsgeschichten.', pt: 'Navegue por carreiras curadas com guias detalhados, habilidades necessárias e histórias de sucesso.' },
  'features.learn.title': { en: 'Learn & Grow', es: 'Aprende y Crece', fr: 'Apprenez et Grandissez', de: 'Lernen & Wachsen', pt: 'Aprenda e Cresça' },
  'features.learn.desc': { en: 'Follow step-by-step roadmaps from beginner to expert with curated resources and milestones.', es: 'Sigue rutas paso a paso desde principiante a experto con recursos curados y hitos.', fr: 'Suivez des parcours étape par étape de débutant à expert avec des ressources et jalons.', de: 'Folgen Sie Schritt-für-Schritt-Lernpfaden vom Anfänger zum Experten mit kuratierten Ressourcen.', pt: 'Siga roteiros passo a passo do iniciante ao especialista com recursos e marcos.' },
  'features.connect.title': { en: 'Connect & Thrive', es: 'Conecta y Prospera', fr: 'Connectez et Prospérez', de: 'Verbinden & Gedeihen', pt: 'Conecte e Prospere' },
  'features.connect.desc': { en: 'Get guidance from mentors and be inspired by success stories from people who walked your path.', es: 'Obtén orientación de mentores e inspírate con historias de éxito de personas que recorrieron tu camino.', fr: 'Obtenez des conseils de mentors et inspirez-vous des histoires de réussite de personnes qui ont parcouru votre chemin.', de: 'Erhalten Sie Anleitung von Mentoren und lassen Sie sich von Erfolgsgeschichten inspirieren.', pt: 'Obtenha orientação de mentores e inspire-se com histórias de sucesso de pessoas que percorreram seu caminho.' },
  
  // Career Categories
  'careers.title': { en: 'Explore Career Paths', es: 'Explora Carreras', fr: 'Explorez les Carrières', de: 'Karrierewege erkunden', pt: 'Explore Carreiras' },
  'careers.subtitle': { en: 'Find the perfect career that matches your passion and skills', es: 'Encuentra la carrera perfecta que coincida con tu pasión y habilidades', fr: 'Trouvez la carrière parfaite qui correspond à votre passion et vos compétences', de: 'Finden Sie die perfekte Karriere, die zu Ihrer Leidenschaft und Ihren Fähigkeiten passt', pt: 'Encontre a carreira perfeita que combina com sua paixão e habilidades' },
  
  // Footer
  'footer.tagline': { en: 'Helping young people find their path since 2024', es: 'Ayudando a jóvenes a encontrar su camino desde 2024', fr: 'Aider les jeunes à trouver leur voie depuis 2024', de: 'Wir helfen jungen Menschen seit 2024, ihren Weg zu finden', pt: 'Ajudando jovens a encontrar seu caminho desde 2024' },
  'footer.rights': { en: 'All rights reserved.', es: 'Todos los derechos reservados.', fr: 'Tous droits réservés.', de: 'Alle Rechte vorbehalten.', pt: 'Todos os direitos reservados.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
