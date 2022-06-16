import { ThemeIcon } from "@/components/icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Burger,
  createStyles,
  CSSObject,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";
import { HEADER_ELEMS } from "./Header.constants";

const HeaderLogo = ({
  bgColor,
  el = <FontAwesomeIcon size="lg" icon={faHome} />,
  size = 100,
}: {
  bgColor: string;
  el?: ReactNode;
  size?: number;
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: `${size}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor,
        cursor: "pointer",
      }}
    >
      <Link href="/">{el}</Link>
    </Box>
  );
};

export const MockHeaderElems = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";

  return (
    <>
      <div className={classes.headerMobile}>
        <HeaderLogo bgColor={theme.colors.cyan[4]} />
        <Burger opened={isOpen} onClick={onClick} size={30} />
      </div>
      <div className={classes.headerDesktop}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <HeaderLogo bgColor={theme.colors.cyan[4]} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThemeIcon />
            {HEADER_ELEMS.map((el) => (
              <Box
                sx={{ margin: "0 1rem", color: dark ? "white" : "black" }}
                key={el.id}
              >
                <Link href={el.link}>{el.name}</Link>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

const headerStyles: CSSObject = {
  display: "flex",
  alignItems: "center",
  height: "100%",
};

const useStyles = createStyles((theme) => ({
  headerMobile: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
    ...headerStyles,
  },
  headerDesktop: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    ...headerStyles,
  },
}));
