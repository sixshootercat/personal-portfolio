import { Testimonials as TestimonialsContent } from '@/containers/Testimonials';
import { client } from '@/sanity/sanity-client';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

const Testimonials = ({ testimonials }: { testimonials: any }) => {
  if (!testimonials) {
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

export default Testimonials;
