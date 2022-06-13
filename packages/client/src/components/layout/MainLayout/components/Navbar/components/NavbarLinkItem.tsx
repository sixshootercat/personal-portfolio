import { NavItem } from "@/components/layout/MainLayout/components/Header";
import { createStyles } from "@mantine/core";
import Link from "next/link";
import { NavbarItem } from ".";

type NavbarLinkItemProps = {
  item: NavItem;
  onClick: () => void;
};

export const NavbarLinkItem = ({ item, onClick }: NavbarLinkItemProps) => {
  const { classes } = useStyles();

  return (
    <NavbarItem onClick={onClick}>
      <Link href={item.link} passHref>
        <a className={classes.navItemMobile}>{item.name}</a>
      </Link>
    </NavbarItem>
  );
};

const useStyles = createStyles(() => ({
  navItemMobile: {
    width: "100%",
    textAlign: "center",
  },
}));
