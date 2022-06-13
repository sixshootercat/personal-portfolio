import React, { ReactNode } from "react";
import { createStyles, Navbar as MantineNavbar } from "@mantine/core";

type NavbarProps = {
  children: ReactNode;
  burgerOpened: boolean;
};

export const Navbar = ({ children, burgerOpened }: NavbarProps) => {
  const { classes } = useStyles();

  return (
    <MantineNavbar
      fixed
      className={classes.mobileMenu}
      sx={{
        marginTop: "90px",
      }}
      width={{ base: "100%", sm: 0 }}
      height="100%"
      hidden={!burgerOpened}
    >
      {children}
    </MantineNavbar>
  );
};

const useStyles = createStyles((theme) => ({
  mobileMenu: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));
