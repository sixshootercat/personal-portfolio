import { MainLayout } from "@/components/layout";
import { About as AboutContent } from "@/containers/About";
import { ReactElement, Suspense } from "react";

const About = () => {
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        <AboutContent />
      </Suspense>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default About;
