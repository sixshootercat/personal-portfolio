import { Box, Divider, useMantineColorScheme } from "@mantine/core";
import React, { ReactNode } from "react";

type NavbarItemProps = {
  children?: ReactNode;
  onClick?: () => void;
  dividerEl?: ReactNode;
};

export const NavbarItem = ({
  children,
  onClick = () => undefined,
  dividerEl = <Divider size="xs" sx={{ width: "100%" }} />,
}: NavbarItemProps) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <Box
        sx={(theme) => ({
          display: "flex",
          width: "100%",
          cursor: "pointer",
          justifyContent: "center",
          padding: "15px 0",
          fontSize: theme.fontSizes.lg,
          "&:hover": {
            backgroundColor: theme.colors.cyan[4],
            color: dark ? "#000" : "#fff",
          },
        })}
        onClick={onClick}
      >
        {children}
      </Box>
      {dividerEl}
    </>
  );
};
