import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

const Socials = () => {
  const className =
    'hover:text-primary w-10 h-10 rounded-full hover:bg-background grid place-content-center';
  return (
    <div className='flex items-center gap-4'>
      <Link
        href='https://github.com/Marcin-Palubinski'
        className={className}
        target='_blank'
        rel='noopener noreferrer'
      >
        <GithubIcon />
      </Link>
      <Link
        href='https://www.linkedin.com/in/marcin-pa%C5%82ubi%C5%84ski-b58943282'
        className={className}
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedinIcon />
      </Link>
    </div>
  );
};

export default Socials;
