import Link from 'next/link';
import ThemeSwitch from '../ThemeSwitch';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Socials from '../Socials';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className='bg-foreground/50 text-background backdrop-blur-md sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-2 flex items-center gap-2'>
        <Link
          href='/'
          className='font-semibold text-2xl bg-primary rounded-full aspect-square w-12 h-12 grid place-content-center border-2 border-primary/50'
        >
          M
        </Link>
        <nav className='ml-auto'>
          <Socials />
        </nav>
        <div className='flex items-center gap-2 ml-2 hover:text-primary'>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
