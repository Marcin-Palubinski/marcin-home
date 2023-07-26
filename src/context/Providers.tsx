'use client';

import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute='class'
      storageKey={`mp-theme`}
      defaultTheme='system'
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
