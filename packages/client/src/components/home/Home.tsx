import { ReactNode } from "react";

type HomeProps = {
  children: ReactNode;
};

export const Home = ({ children }: HomeProps) => {
  return <div>{children}</div>;
};
