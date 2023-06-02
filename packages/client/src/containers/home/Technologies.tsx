import { SectionTitle } from './SectionTitle';
import { TechItem, TechnologiesList } from './TechnologiesList';
import { v4 } from 'uuid';

const TECHS: TechItem[] = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/', id: v4() },
  { name: 'React', url: 'https://reactjs.org/', id: v4() },
  { name: 'Go', url: 'https://golang.org/', id: v4() },
  { name: 'Node.js', url: 'https://nodejs.org/', id: v4() },
  { name: 'Next.js', url: 'https://nextjs.org/', id: v4() },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    id: v4(),
  },
  { name: 'Docker', url: 'https://www.docker.com/', id: v4() },
  { name: 'Python', url: 'https://www.python.org/', id: v4() },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', id: v4() },
];

export const Technologies = () => {
  return (
    <>
      <SectionTitle title='🧰 Techs & Tools' />
      <section className='flex w-full mb-10 dark:bg-slate-700 bg-slate-100'>
        <TechnologiesList items={TECHS} />
      </section>
    </>
  );
};
