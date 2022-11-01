import { AboutMe } from './AboutMe';
import { TechTools } from './TechTools';
import { ContactMe } from './ContactMe';

export const Home = () => {
  return (
    <div className='mb-24 sm:mb-56 flex items-center justify-center flex-col mt-10 md:px-20'>
      <AboutMe />
      <TechTools />
      <ContactMe />
    </div>
  );
};
