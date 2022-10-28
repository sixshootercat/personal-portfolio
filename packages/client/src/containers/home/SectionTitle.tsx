import { ReactNode } from 'react';

type SectionTitleProps = {
  title: ReactNode;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className='flex justify-center items-center h-14'>
      <h1 className='text-2xl text-black dark:text-white'>{title}</h1>
    </div>
  );
};
