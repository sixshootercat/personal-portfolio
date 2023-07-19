import { SectionTitle } from './SectionTitle';
import { TechnologiesList } from './TechnologiesList';

export const Technologies = ({ items }: { items: any }) => {
  return (
    <>
      <SectionTitle title='🧰 Techs & Tools' />
      <section className='flex w-full mb-10 dark:bg-slate-700 bg-slate-100'>
        <TechnologiesList items={items} />
      </section>
    </>
  );
};
