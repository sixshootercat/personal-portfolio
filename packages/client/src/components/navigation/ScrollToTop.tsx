import { useScrollingUp } from "@/hooks";
import { Box, useMantineTheme } from "@mantine/core";
import React from "react";
import { UpArrowIcon } from "../icons";

export const ScrollToTop = () => {
  const isScrollingUp = useScrollingUp();
  const theme = useMantineTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isScrollingUp) return null;

  return (
    <UpArrowIcon
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 cursor-pointer z-50"
      fill={theme.colors.cyan[4]}
      size={48}
    />
  );
};
