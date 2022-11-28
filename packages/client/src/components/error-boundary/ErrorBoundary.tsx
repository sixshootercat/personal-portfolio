import { Button, Group, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { BgImage } from '../images';

type MyProps = {
  children: React.ReactNode;
};

type MyState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<MyProps, MyState> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
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
                Oops, something isn&apos;t right.
              </Text>
              <Text color='black' size='md'>
                <Link href='/'>Go back home</Link>
              </Text>
              <Button
                variant='subtle'
                onClick={() => this.setState({ hasError: false })}
              >
                <Text weight={400} color='black' size='md'>
                  Try Again?
                </Text>
              </Button>
            </Group>
          </BgImage>
        </>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;
