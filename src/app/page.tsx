import Image from '@/components/ui/Image';
import { MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'CATOOLIN',
    description:
      'Projekt i implementacja aplikacji internetowej wspomagającej działanie firm cateringowych.',
    image: '/ss1.png',
    heading: 'Praca inżynierska',
    link: 'https://catoolin-v0.vercel.app',
  },
  // {
  //   title: 'Amarotto',
  //   description: 'Website with a shop for the Amarotto company.',
  //   image: '/amarotto.png',
  //   heading: 'SHOP',
  //   link: 'https://amarotto.com/',
  // },
  // {
  //   title: 'Fundacja Foton',
  //   description: 'Website for the Foton Foundation.',
  //   image: '/foton.svg',
  //   heading: 'Website',
  //   link: 'https://fundacjafoton.pl/',
  // },
];

const ProjectsSection = () => (
  <section className='container px-5 py-12 mx-auto'>
    <div className='flex flex-wrap w-full mb-20'>
      <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
        <h1 className='sm:text-3xl text-2xl font-medium mb-2 border-b-4 border-primary px-0.5 pb-0.5 w-fit'>
          Projekty
        </h1>
      </div>
      <p className='lg:w-1/2 w-full leading-relaxed text-foreground/70'>
        {/* Right */}
      </p>
    </div>
    <div className='flex flex-wrap gap-4 justify-center'>
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
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
  <section className='container px-5 py-12 mx-auto'>
    <div className='flex flex-wrap w-full mb-20'>
      <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
        <h2 className='sm:text-3xl text-2xl font-medium mb-2 border-b-4 border-primary px-0.5 pb-0.5 w-fit'>
          Kontakt
        </h2>
      </div>
      <p className='lg:w-1/2 w-full leading-relaxed text-foreground/70'>
        {/* Right */}
      </p>
    </div>
    <div>
      <h3 className='text-xl font-semibold'>Marcin Pałubiński</h3>
      <ul className='text-foreground/80 space-y-2 mt-6'>
        {[
          {
            href: 'tel:48534356433',
            label: '+48 534 356 433',
            icon: <PhoneIcon />,
          },
          {
            href: 'mailto:marcin.palubinski99@gmail.com',
            label: 'marcin.palubinski99@gmail.com',
            icon: <MailIcon />,
          },
          {
            href: 'https://discordapp.com/users/martinofy2137',
            label: 'martinofy2137',
            icon: '/discord.png',
          },
        ].map(({ href, label, icon }) => (
          <li key={href + label}>
            <Link
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
              {typeof icon === 'string' ? (
                <Image
                  src={icon}
                  alt='icon'
                  className='h-6 w-6 bg-transparent'
                />
              ) : (
                icon
              )}
              {label}
            </Link>
          </li>
        ))}
      </ul>
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
      {/* <HeroSection /> */}
      <ContactSection />
      <ProjectsSection />
    </main>
  );
}
