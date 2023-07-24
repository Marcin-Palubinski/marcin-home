import packageInfo from '@/../package.json';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import Socials from '../Socials';

const Footer = () => {
  return (
    <footer className='relative grid w-full grid-cols-2 px-4 py-3 text-sm md:grid-cols-3 gap-4'>
      <div>
        <span className='mr-1.5 text-xs text-foreground/70'>
          v{packageInfo.version}
        </span>
      </div>
      <div className='text-right md:text-center'>
        <Link href='https://github.com/Marcin-Palubinski'>
          @Marcin Pałubiński 2023
        </Link>
      </div>
      <div className='col-span-2 md:col-span-1 flex justify-end'>
        <Socials />
      </div>
    </footer>
  );
};

export { Footer };
