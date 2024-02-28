import { Home as HomeContent } from "@/components/home";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { client } from "@/sanity/sanity-client";
import Head from "next/head";
import {
  TECHNOLOGIES_QUERY,
  ABOUT_ME_QUERY,
  technologiesSchema,
} from "@/sanity/queries";
import type { Technologies as ITechnologies } from "@/sanity/queries";
import { AboutMe, ContactMe, Technologies } from "@/components/home/components";

const Home = ({
  technologies,
  aboutMe,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="mt-24">
      <Head>
        <title>Home</title>
      </Head>
      <HomeContent>
        <div className="mb-8 flex items-center justify-center flex-col mt-10 md:px-20 max-w-[1440px] w-full m-auto">
          <AboutMe sanityData={aboutMe} />
          <Technologies sanityData={technologies} />
          <ContactMe />
        </div>
      </HomeContent>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  technologies: ITechnologies;
  aboutMe: any; //TODO: improve typing (sanity image and protable text)
}> = async () => {
  const technologies = await client.fetch(TECHNOLOGIES_QUERY).then((res) => {
    return technologiesSchema.parse(res);
  });

  const aboutMe = await client.fetch(ABOUT_ME_QUERY);

  return {
    props: {
      technologies,
      aboutMe,
    },
  };
};

export default Home;
