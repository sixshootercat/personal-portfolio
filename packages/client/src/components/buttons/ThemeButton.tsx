import { Box, useMantineColorScheme } from "@mantine/core";
import React, { ReactNode } from "react";

type ThemeButtonProps = {
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
};

export const ThemeButton = ({ rightIcon, leftIcon }: ThemeButtonProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",
        padding: "15px 0",
        fontSize: theme.fontSizes.lg,
        "&:hover": {
          backgroundColor: theme.colors.cyan[4],
          color: dark ? "#000" : "#fff",
        },
      })}
      onClick={() => toggleColorScheme()}
    >
      {leftIcon}
      {dark ? "Light" : "Dark"}
      {rightIcon}
    </Box>
  );
};
