import { MainLayout } from '@/components/layouts';
import { Projects as ProjectsContent } from '@/containers/Projects';
import Head from 'next/head';
import { ReactElement } from 'react';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectsContent />
    </>
  );
};

Projects.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Projects;
