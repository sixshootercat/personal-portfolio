import { AboutMe, ContactMe, Technologies } from './components';

export const Home = ({ items }: { items: any }) => {
  return (
    <div className='mb-8 flex items-center justify-center flex-col mt-10 md:px-20 max-w-[1440px] w-full m-auto'>
      <AboutMe />
      <Technologies items={items} />
      <ContactMe />
    </div>
  );
};
