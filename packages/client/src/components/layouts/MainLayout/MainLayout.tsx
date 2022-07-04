import React, { useState } from 'react';
import { Footer, Header, MenuOverlay } from '@/components/navigation';
import { AppShell, useMantineTheme, Box } from '@mantine/core';
import { ScrollToTop } from '@/components/navigation';
import { useIsClient } from '@/hooks';
import { useMediaQuery, useScrollLock } from '@mantine/hooks';
import { MockMenuOverlayElems } from '@/components/navigation/MenuOverlay/';
import { MockHeaderElems } from '@/components/navigation/Header/';
import { MockFooterElems } from '@/components/navigation/Footer/';
import { MEDIA_QUERIES } from 'src/constants';

type MainLayoutProps = {
  children: React.ReactNode;
  marginTop?: string | number;
  hasBodyPad?: boolean;
  height?: number;
};

export const MainLayout = ({
  children,
  marginTop = '90px',
  height = 0,
  hasBodyPad = true,
}: MainLayoutProps) => {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);
  const [, setScrollLocked] = useScrollLock(false);
  const isClient = useIsClient();
  const [navMenuOpened, setNavMenuOpened] = useState(false);

  // NOTE: avoid server and client rendering result mismatch
  if (!isClient) return null;

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      padding={0}
      header={
        <Header>
          <MockHeaderElems
            isOpen={navMenuOpened}
            onClick={() => {
              setScrollLocked((p) => !p);
              setNavMenuOpened((o) => !o);
            }}
          />
        </Header>
      }
      navbar={
        <MenuOverlay isOpen={navMenuOpened}>
          <MockMenuOverlayElems
            onItemClick={() => {
              setScrollLocked((p) => !p);
              setNavMenuOpened((o) => !o);
            }}
          />
        </MenuOverlay>
      }
      footer={
        <Footer>
          <MockFooterElems />
        </Footer>
      }
    >
      <Box
        sx={{
          marginTop,
          ...(height && { height: `${height}vh` }),
          padding: isDesktop ? '20px 10%' : '20px',
        }}
      >
        <ScrollToTop />
        {children}
      </Box>
    </AppShell>
  );
};