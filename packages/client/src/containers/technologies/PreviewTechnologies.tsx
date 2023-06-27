import React from 'react';
import { usePreview } from '@/sanity/sanity-preview';
import { Technologies } from './Technologies';
import Link from 'next/link';
import { Button } from '@mantine/core';

const PreviewTechnologies = ({ query }: { query: any }) => {
  const data = usePreview(null, query);

  return (
    <>
      <Technologies content={data} />
      {/**fix this */}
      <Link href='/api/exit-preview'>
        <Button
          className='fixed bottom-0 right-0'
          variant='filled'
          component='div'
          size='xl'
        >
          Exit Preview
        </Button>
      </Link>
    </>
  );
};

export default PreviewTechnologies;
