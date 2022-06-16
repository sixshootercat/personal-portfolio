import React from "react";
import { Footer as MantineFooter } from "@mantine/core";

type FooterProps = {
  children: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  return (
    <MantineFooter
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem 0",
      }}
      height="auto"
    >
      {children}
    </MantineFooter>
  );
};
