import { MainLayout } from "@/components/layout";
import { Projects as ProjectsContent } from "@/containers/Projects";
import { ReactElement } from "react";

const Projects = () => {
  return <ProjectsContent />;
};

Projects.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Projects;
