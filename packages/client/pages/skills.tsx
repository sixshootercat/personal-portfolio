import { MainLayout } from '@/components/layouts';
import { Skills as SkillsContent } from '@/containers/Skills';
import { ReactElement } from 'react';

const Skills = () => {
  return (
    <div>
      <SkillsContent />
    </div>
  );
};

Skills.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Skills;
