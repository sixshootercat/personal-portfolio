import { ReactNode } from 'react';
import { Text } from '@mantine/core';

type SectionTitleProps = {
  title: ReactNode;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className='flex justify-center items-center h-14'>
      <Text component='h1' size='xl'>
        {title}
      </Text>
    </div>
  );
};
