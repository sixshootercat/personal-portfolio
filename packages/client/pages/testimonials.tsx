import { MainLayout } from '@/components/layouts';
import { Testimonials as TestimonialsContent } from '@/containers/Testimonials';
import { client } from '@/sanity/sanity-client';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { ReactElement } from 'react';

const Testimonials = ({ testimonials }: { testimonials: any }) => {
  if (!testimonials.length) {
    return (
      <div>
        <h1>Testimonials</h1>
        <p>This is the testimonials page</p>
      </div>
    );
  }

  return <TestimonialsContent data={testimonials} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'testimonials']`;
  const testimonials = await client.fetch(query);

  return {
    props: {
      testimonials,
    },
  };
};

Testimonials.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Testimonials;
