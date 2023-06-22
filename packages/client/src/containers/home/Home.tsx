import { AboutMe } from './AboutMe';
import { Technologies } from './Technologies';
import { ContactMe } from './ContactMe';

export const Home = ({ items }: { items: any }) => {
  return (
    <div className='mb-8 flex items-center justify-center flex-col mt-10 md:px-20'>
      <AboutMe />
      <Technologies items={items} />
      <ContactMe />
    </div>
  );
};
