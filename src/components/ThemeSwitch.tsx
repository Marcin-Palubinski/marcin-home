'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const toggleTheme = () => {
    setTheme(
      theme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'light'
          : 'dark'
        : theme === 'dark'
        ? 'light'
        : 'dark'
    );
  };
  if (!mounted) return null;
  return (
    <button
      onClick={toggleTheme}
      className='hover:text-primary w-10 h-10 rounded-full hover:bg-background grid place-content-center'
    >
      {resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeSwitch;
