'use client';

import Button, { buttonVariants } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Link from 'next/link';

const HeroSection = () => (
  <section className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
      <h1 className='sm:text-4xl text-3xl mb-4 font-medium'>
        Before they sold out
        <br className='hidden lg:inline-block' />
        readymade gluten
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
    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
      <img
        className='object-cover object-center rounded'
        alt='hero'
        src='https://dummyimage.com/720x600'
      />
    </div>
  </section>
);

const ProjectsSection = () => (
  <section className='container px-5 py-24 mx-auto'>
    <div className='flex flex-wrap w-full mb-20'>
      <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
        <h1 className='sm:text-3xl text-2xl font-medium mb-2 border-b-4 border-primary px-0.5 pb-0.5 w-fit'>
          Projects
        </h1>
      </div>
      <p className='lg:w-1/2 w-full leading-relaxed text-foreground/70'>
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p>
    </div>
    <div className='flex flex-wrap -m-4'>
      <Link
        href='/projects#catoolin'
        className='xl:w-1/4 md:w-1/2 p-6 rounded-lg transition-colors bg-foreground/5 active:bg-foreground/20 focus:bg-foreground/10 hover:bg-foreground/10'
      >
        <Image
          src='https://dummyimage.com/720x400'
          alt='content'
          className='h-40 rounded w-full mb-6'
        />
        <h3 className='tracking-widest text-primary text-xs font-medium'>
          THESIS
        </h3>
        <h2 className='text-lg font-medium mb-4'>Catoolin app</h2>
        <p className='leading-relaxed text-base'>
          Design and implementation of a web application supporting a catering
          company.
        </p>
      </Link>
    </div>
  </section>
);

const ContactSection = () => (
  <section
    className='text-foreground/70 body-font relative container px-5 py-24 mx-auto'
    id='contact'
  >
    <div className='flex flex-col text-center w-full mb-12'>
      <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-foreground'>
        Contact me
      </h1>
      <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
        Ask me about anything or send a job offer.
      </p>
    </div>
    <div className='lg:w-1/2 md:w-2/3 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Input name='name' id='name' label='Name' />
        <Input name='email' id='email' label='Email' type='email' />
        <div className='col-span-2'>
          <TextArea large name='message' id='message' label='Message' />
        </div>
        <div className='col-span-2'>
          <Button className='mx-auto'>Send</Button>
        </div>
        <Link
          href='mailto:marcin.palubinski99@gmail.com'
          className='text-primary mt-8 p-2 mx-auto col-span-2'
        >
          marcin.palubinski99@gmail.com
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className='space-y-24 pt-12'>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
