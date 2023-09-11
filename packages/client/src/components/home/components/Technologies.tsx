import { SectionTitle } from './SectionTitle';
import { TechnologiesList } from './TechnologiesList';

type TechnologiesProps = {
  sanityData?: any;
};

export const Technologies = ({ sanityData }: TechnologiesProps) => {
  return (
    <>
      <SectionTitle title='🧰 Techs & Tools' />
      <section className='flex w-full mb-10 dark:bg-slate-700 bg-slate-100'>
        <TechnologiesList items={sanityData} />
      </section>
    </>
  );
};
