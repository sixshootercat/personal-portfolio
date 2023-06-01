import { SectionTitle } from './SectionTitle';
import { TechItem, TechToolsList } from './TechToolsList';
import { v4 } from 'uuid';

const TECHS: TechItem[] = [
  { name: 'TypeScript', id: v4() },
  { name: 'React', id: v4() },
  { name: 'Go', id: v4() },
  { name: 'NodeJS', id: v4() },
  { name: 'JavaScript', id: v4() },
  { name: 'Docker', id: v4() },
  { name: 'Python', id: v4() },
];

export const TechTools = () => {
  return (
    <>
      <SectionTitle title='🧰 Techs & Tools' />
      <section className='flex py-6 w-full mb-10 bg-slate-700 dark:bg-slate-100'>
        <TechToolsList items={TECHS} />
      </section>
    </>
  );
};
