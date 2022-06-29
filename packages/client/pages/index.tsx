import { Home as HomeContent } from '@/containers/Home';
import { ReactElement } from 'react';
import { MainLayout } from '@/components/layouts';

const Home = () => {
  return (
    <div>
      <HomeContent />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Home;
