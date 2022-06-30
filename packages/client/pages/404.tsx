import { MainLayout } from '@/components/layouts';
import { Group, Text } from '@mantine/core';
import Link from 'next/link';
import { ReactElement } from 'react';
import { BgImage } from '@/components/images';

const NotFound = () => {
  return (
    <BgImage
      src='/images/foggy-mountains.jpg'
      alt='foggy mountains'
      height='100vh'
    >
      <Group direction='column' align='center'>
        <Text color='black' sx={{ fontSize: '48px' }}>
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
  );
};

NotFound.getLayout = (page: ReactElement) => {
  return (
    <MainLayout marginTop={0} bodyPadding={0}>
      {page}
    </MainLayout>
  );
};

export default NotFound;
