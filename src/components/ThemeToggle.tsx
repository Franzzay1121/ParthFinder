import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

const THEME_KEY = 'theme';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  React.useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) root.classList.add('dark');
      else root.classList.remove('dark');
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [isDark]);

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={isDark}
      onPressedChange={(val: boolean) => setIsDark(val)}
      size="sm"
      className="w-10"
    >
      {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </Toggle>
  );
};

export default ThemeToggle;
