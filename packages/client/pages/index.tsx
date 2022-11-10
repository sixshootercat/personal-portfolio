import { Home as HomeContent } from '@/containers/home/Home';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContent />
    </>
  );
};

export default Home;
