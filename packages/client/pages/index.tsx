import { Home as HomeContent } from '@/containers/home/Home';
import { ReactElement } from 'react';
import { MainLayout } from '@/components/layouts';

const Home = () => {
  return <HomeContent />;
};

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
