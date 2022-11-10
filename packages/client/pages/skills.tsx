import { MainLayout } from '@/components/layouts';
import { Skills as SkillsContent } from '@/containers/Skills';
import Head from 'next/head';
import { ReactElement } from 'react';

const Skills = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <SkillsContent />
    </>
  );
};

Skills.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Skills;
