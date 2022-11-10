import { Projects as ProjectsContent } from '@/containers/Projects';
import Head from 'next/head';

const Projects = () => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectsContent />
    </div>
  );
};

export default Projects;
