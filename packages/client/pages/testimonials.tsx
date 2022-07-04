import { Testimonials as TestimonialsContent } from '@/containers/Testimonials';
import { client } from '@/sanity/sanity-client';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

const Testimonials = ({ testimonials }: { testimonials: any }) => {
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

export default Testimonials;
