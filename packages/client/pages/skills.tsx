import { Skills as SkillsContent } from '@/containers/Skills';
import Head from 'next/head';

const Skills = () => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Projects</title>
      </Head>
      <SkillsContent />
    </div>
  );
};

export default Skills;
