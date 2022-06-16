import { NavItem } from "@/components/navigation/Header";
import { createStyles } from "@mantine/core";
import Link from "next/link";
import { MenuOverlayItem } from ".";

type MenuOverlayLinkItemProps = {
  item: NavItem;
  onClick: () => void;
};

export const MenuOverlayLinkItem = ({
  item,
  onClick,
}: MenuOverlayLinkItemProps) => {
  const { classes } = useStyles();

  return (
    <MenuOverlayItem onClick={onClick}>
      <Link href={item.link} passHref>
        <a className={classes.navItemMobile}>{item.name}</a>
      </Link>
    </MenuOverlayItem>
  );
};

const useStyles = createStyles(() => ({
  navItemMobile: {
    width: "100%",
    textAlign: "center",
  },
}));
