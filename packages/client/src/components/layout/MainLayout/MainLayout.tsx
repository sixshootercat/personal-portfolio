import React, { ReactNode, useState } from "react";
import { Footer, Header, Navbar } from "./components";
import { HEADER_ELEMS } from "./components/Header";
import { FOOTER_ELEMS } from "./components/Footer";
import {
  AppShell,
  useMantineTheme,
  Box,
  Group,
  Burger,
  createStyles,
  useMantineColorScheme,
  CSSObject,
  Text,
  Divider,
} from "@mantine/core";
import { ScrollToTop } from "@/components/navigation";
import Link from "next/link";
import { useIsClient } from "@/hooks";
import { ThemeIcon } from "@/components/icons";
import { useMediaQuery, useScrollLock } from "@mantine/hooks";
import { NavbarLinkItem } from "@/components/layout/MainLayout/components/Navbar";
import { NavbarThemeItem } from "@/components/layout/MainLayout/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { MEDIA_QUERIES } from "src/constants";

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

const FooterLogo = ({
  el = <FontAwesomeIcon icon={faHome} />,
}: {
  el?: ReactNode;
}) => {
  return <Link href="/">{el}</Link>;
};

type MainLayoutProps = {
  children: React.ReactNode;
  marginTop?: string | number;
  bodyPadding?: number;
  height?: number;
};

const filterElemsByCol = (
  elems: {
    col: number;
    id: number;
    name: string;
    link: string;
  }[],
  col: 1 | 2
) => {
  return elems.filter((el) => el.col === col);
};

export const MainLayout = ({
  children,
  marginTop = "90px",
  bodyPadding = 10,
  height = 0,
}: MainLayoutProps) => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  const [, setScrollLocked] = useScrollLock(false);
  const { classes } = useStyles();
  const isClient = useIsClient();
  const [burgerOpened, setBurgerOpened] = useState(false);

  const col1 = filterElemsByCol(FOOTER_ELEMS, 1);
  const col2 = filterElemsByCol(FOOTER_ELEMS, 2);

  const makeNavbarElems = () => {
    return (
      <Group direction="column" sx={{ height: "100%", gap: 0 }}>
        {HEADER_ELEMS.map((el) => {
          return (
            <NavbarLinkItem
              item={el}
              key={el.id}
              onClick={() => setBurgerOpened(false)}
            />
          );
        })}
        <NavbarThemeItem onClick={() => toggleColorScheme()} />
      </Group>
    );
  };

  const makeHeaderElems = () => {
    return (
      <>
        <div className={classes.headerMobile}>
          <HeaderLogo bgColor={theme.colors.cyan[4]} />
          <Burger
            opened={burgerOpened}
            onClick={() => {
              setScrollLocked((p) => !p);
              setBurgerOpened((o) => !o);
            }}
            size={30}
          />
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

  const makeFooterElems = () => {
    return (
      <Group
        sx={(theme) => ({
          [theme.fn.largerThan("xs")]: {
            flexDirection: "row",
            justifyContent: "flex-start",
            marginLeft: "2rem",
          },
          [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
          },
        })}
        spacing={40}
      >
        <Box
          sx={{
            width: 100,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterLogo />
        </Box>
        <Group direction="column" sx={{ width: 100 }}>
          {col1.map((el) => (
            <Text
              key={el.id}
              sx={{
                ":hover": {
                  color: theme.colors.cyan[4],
                },
              }}
            >
              <Link href={el.link}>{el.name}</Link>
            </Text>
          ))}
        </Group>
        {isMobile && <Divider size="xs" sx={{ width: "50%" }} />}
        <Group direction="column" sx={{ width: 100 }}>
          {col2.map((el) => (
            <Text
              sx={{
                ":hover": {
                  color: theme.colors.cyan[4],
                },
              }}
              key={el.id}
            >
              <Link href={el.link}>{el.name}</Link>
            </Text>
          ))}
        </Group>
      </Group>
    );
  };

  // NOTE: avoid server and client rendering result mismatch
  if (!isClient) return null;

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      padding={bodyPadding}
      header={<Header>{makeHeaderElems()}</Header>}
      navbar={<Navbar burgerOpened={burgerOpened}>{makeNavbarElems()}</Navbar>}
      footer={<Footer>{makeFooterElems()}</Footer>}
    >
      <Box
        sx={{
          marginTop,
          ...(height && { height: `${height}vh` }),
        }}
      >
        <ScrollToTop />
        {children}
      </Box>
    </AppShell>
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
