import { MainLayout } from "@/components/layout";
import { About as AboutContent } from "@/containers/About";
import { ReactElement } from "react";

const About = () => {
  return <AboutContent />;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default About;
