import React, { useState } from 'react';
import { Footer, Header, MenuOverlay } from '@/components/navigation';
import { AppShell, useMantineTheme, Box } from '@mantine/core';
import { useIsSSR } from '@/hooks';
import { useScrollLock } from '@mantine/hooks';
import { MenuOverlayItems } from '@/components/navigation/MenuOverlay';
import { HeaderItems } from '@/components/navigation/Header';
import { FooterItems } from '@/components/navigation/Footer';
import { useToggleThemeHotkey } from './useToggleThemeHotkey';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useMantineTheme();
  const [, setScrollLocked] = useScrollLock(false);
  const isSSR = useIsSSR();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleMenuOverlay = () => {
    setScrollLocked((p) => !p);
    setIsNavMenuOpen((o) => !o);
  };

  useToggleThemeHotkey();

  // NOTE: avoid server and client rendering result mismatch
  if (!isSSR) return null;

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
          <HeaderItems isOpen={isNavMenuOpen} onClick={toggleMenuOverlay} />
        </Header>
      }
      navbar={
        <MenuOverlay isOpen={isNavMenuOpen}>
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
          padding: '15px 5%',
        }}
      >
        {children}
      </Box>
    </AppShell>
  );
};
