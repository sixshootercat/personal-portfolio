import { MainLayout } from '@/components/layouts';
import { Group, Text } from '@mantine/core';
import Link from 'next/link';
import { ReactElement } from 'react';
import { BgImage } from '@/components/images';
import Head from 'next/head';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Oops 404</title>
      </Head>
      <BgImage
        src='/images/foggy-mountains.jpg'
        alt='foggy mountains'
        className='items-center h-screen justify-center w-full flex relative'
      >
        <Group direction='column' align='center'>
          <Text color='black' className='text-5xl h-'>
            404
          </Text>
          <Text color='black' size='lg'>
            Oops, we don&apos;t have that page.
          </Text>
          <Text color='black' size='md'>
            <Link href='/'>Go back home</Link>
          </Text>
        </Group>
      </BgImage>
    </>
  );
};

NotFound.getLayout = (page: ReactElement) => {
  return <MainLayout marginTop={0}>{page}</MainLayout>;
};

export default NotFound;
