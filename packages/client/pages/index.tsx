import { Home as HomeContent } from '@/containers/home/Home';
import Head from 'next/head';

const Home = () => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContent />
    </div>
  );
};

export default Home;
