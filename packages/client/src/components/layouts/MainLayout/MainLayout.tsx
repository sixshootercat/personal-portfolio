import React, { useState } from 'react';
import { Footer, Header, MenuOverlay } from '@/components/navigation';
import { AppShell, useMantineTheme, Box } from '@mantine/core';
import { useIsClient } from '@/hooks';
import { useScrollLock } from '@mantine/hooks';
import { MenuOverlayItems } from '@/components/navigation/MenuOverlay';
import { HeaderItems } from '@/components/navigation/Header';
import { FooterItems } from '@/components/navigation/Footer';

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
}: MainLayoutProps) => {
  const theme = useMantineTheme();
  const [, setScrollLocked] = useScrollLock(false);
  const isClient = useIsClient();
  const [navMenuOpened, setNavMenuOpened] = useState(false);

  const toggleMenuOverlay = () => {
    setScrollLocked((p) => !p);
    setNavMenuOpened((o) => !o);
  };

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
          <HeaderItems isOpen={navMenuOpened} onClick={toggleMenuOverlay} />
        </Header>
      }
      navbar={
        <MenuOverlay isOpen={navMenuOpened}>
          <MenuOverlayItems onItemClick={toggleMenuOverlay} />
        </MenuOverlay>
      }
      footer={
        <Footer>
          <FooterItems />
        </Footer>
      }
    >
      <Box
        sx={{
          marginTop,
          ...(height && { height: `${height}%` }),
          padding: '15px 5%',
        }}
      >
        {children}
      </Box>
    </AppShell>
  );
};
