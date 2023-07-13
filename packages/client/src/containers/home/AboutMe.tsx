import Image from 'next/image';
import { SectionTitle } from './SectionTitle';
import { Text } from '@mantine/core';

export const AboutMe = () => {
  return (
    <div className='flex items-center flex-col justify-center'>
      <SectionTitle title='👨‍💻 About Me' />
      <div className='my-10 rounded-full overflow-hidden'>
        <Image
          src='/images/profile-kevin.jpg'
          alt='man with sunglasses'
          width='200px'
          className='rounded-full'
          height='200px'
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/images/profile-kevin.jpg'
        />
      </div>
      <div className='md:w-5/6'>
        <Text>
          Pragmatic thinker and problem solver. I&apos;ve been designing and
          developing solutions since 2016. For the past 5 years, I have been
          working as a frontend engineer IC with tools like React, TypeScript,
          and Next.js. Ocassionally, I delve into backend development using
          primarily Node.js and Golang for various personal side projects. When
          I&apos;m not programming, you can find me reading up on philosophy and
          psychology content, doing physical training, and trying out new
          specialty coffee houses.
        </Text>
        <br />
        <Text>
          Feel free to reach out to me through my contact links to discuss
          potential collaborations or opportunities in software development.
        </Text>
      </div>
    </div>
  );
};
