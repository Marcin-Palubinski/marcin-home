'use client';

import { buttonVariants } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import Link from 'next/link';

const HeroSection = () => (
  <section className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
      <h1 className='sm:text-4xl text-3xl mb-4 font-medium'>
        Marcin Pałubiński
        <br className='hidden lg:inline-block' />
        <span className='text-primary'>Web developer</span>
      </h1>
      <p className='mb-8 leading-relaxed'>
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className='flex justify-center'>
        <Link href='#contact' className={buttonVariants()}>
          Contact me
        </Link>
      </div>
    </div>
    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative overflow-hidden'>
      <img
        className='object-cover object-center rounded'
        alt='hero'
        src='https://dummyimage.com/720x600'
      />
    </div>
  </section>
);

const projects = [
  {
    title: 'Catoolin app',
    description:
      'Design and implementation of a web application supporting a catering company.',
    image: 'https://dummyimage.com/720x400',
    heading: 'THESIS',
    link: '/projects#catoolin',
  },
  {
    title: 'Amarotto',
    description: 'Website with a shop for the Amarotto company.',
    image: '/amarotto.png',
    heading: 'SHOP',
    link: 'https://www.iph123.webd.pro/',
  },
  {
    title: 'Fundacja Foton',
    description: 'Website for the Foton Foundation.',
    image: '/foton.svg',
    heading: 'Website',
    link: 'https://fundacjafoton.pl/',
  },
];

const ProjectsSection = () => (
  <section className='container px-5 py-12 mx-auto'>
    <div className='flex flex-wrap w-full mb-20'>
      <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
        <h1 className='sm:text-3xl text-2xl font-medium mb-2 border-b-4 border-primary px-0.5 pb-0.5 w-fit'>
          My work
        </h1>
      </div>
      {/* <p className='lg:w-1/2 w-full leading-relaxed text-foreground/70'>
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p> */}
    </div>
    <div className='flex flex-wrap gap-4 justify-center'>
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.link}
          className='xl:w-1/4 md:w-1/2 p-6 rounded-lg transition-colors bg-foreground/5 active:bg-foreground/20 focus:bg-foreground/10 hover:bg-foreground/10 w-full'
        >
          <Image
            src={project.image}
            alt='content'
            className='h-40 rounded w-full mb-6'
          />
          <h3 className='tracking-widest text-primary text-xs font-medium uppercase'>
            {project.heading}
          </h3>
          <h2 className='text-lg font-medium mb-4'>{project.title}</h2>
          <p className='leading-relaxed text-base'>{project.description}</p>
        </Link>
      ))}
    </div>
  </section>
);

const ContactSection = () => (
  <section className='text-foreground/70' id='contact'>
    <h1 className='text-2xl font-semibold text-foreground text-center mb-6'>
      Contact me
    </h1>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto p-6 gap-4'>
      <Link
        href='https://discordapp.com/users/Martino#5151'
        className='flex items-center space-x-6 font-semibold text-lg rounded-lg transition-colors bg-foreground/5 active:bg-foreground/20 focus:bg-foreground/10 hover:bg-foreground/10 w-full p-4'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/discord.png'
          alt='discord'
          className='h-12 w-12 bg-transparent'
        />
        <div>Martino#5151</div>
      </Link>
      <Link
        href='mailto:marcin.palubinski99@gmail.com'
        className='flex items-center space-x-6 font-semibold text-lg rounded-lg transition-colors bg-foreground/5 active:bg-foreground/20 focus:bg-foreground/10 hover:bg-foreground/10 w-full p-4'
      >
        <Image
          src='/mail.png'
          alt='email'
          className='h-12 w-12 bg-transparent'
        />
        <div>marcin.palubinski99@gmail.com</div>
      </Link>
      <Link
        href='mailto:marcin.palubinski99@gmail.com'
        className='flex items-center space-x-6 font-semibold text-lg rounded-lg transition-colors bg-foreground/5 active:bg-foreground/20 focus:bg-foreground/10 hover:bg-foreground/10 w-full p-4 md:col-span-2 xl:col-span-1'
      >
        <Image
          src='/mail.png'
          alt='email'
          className='h-12 w-12 bg-transparent'
        />
        <div>marcin.palubinski99@gmail.com</div>
      </Link>
    </div>
  </section>
);
// const ContactSection = () => (
//   <section
//     className='text-foreground/70 body-font relative container px-5 py-24 mx-auto'
//     id='contact'
//   >
//     <div className='flex flex-col text-center w-full mb-12'>
//       <h1 className='sm:text-3xl text-2xl font-medium mb-4 text-foreground'>
//         Contact me
//       </h1>
//       {/* <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
//         Ask me about anything or send a job offer.
//       </p> */}
//     </div>
//     <div className='lg:w-1/2 md:w-2/3 mx-auto'>
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//         <Input name='name' id='name' label='Name' />
//         <Input name='email' id='email' label='Email' type='email' />
//         <div className='col-span-2'>
//           <TextArea large name='message' id='message' label='Message' />
//         </div>
//         <div className='col-span-2'>
//           <Button className='mx-auto'>Send</Button>
//         </div>
//         <Link
//           href='mailto:marcin.palubinski99@gmail.com'
//           className='text-primary mt-8 p-2 mx-auto col-span-2'
//         >
//           marcin.palubinski99@gmail.com
//         </Link>
//       </div>
//     </div>
//   </section>
// );

export default function Home() {
  return (
    <main className='space-y-24 pt-12'>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
