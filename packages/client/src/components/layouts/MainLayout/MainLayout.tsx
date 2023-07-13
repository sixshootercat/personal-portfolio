import React, { useState } from 'react';
import { Footer, Header, MenuOverlay } from '@/components/navigation';
import { AppShell } from '@mantine/core';
import { useIsSSR } from '@/hooks';
import { useScrollLock } from '@mantine/hooks';
import { MenuOverlayItems } from '@/components/navigation/MenuOverlay';
import { HeaderItems } from '@/components/navigation/Header';
import { useToggleThemeHotkey } from './useToggleThemeHotkey';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
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
      className='dark:bg-slate-950 bg-zinc-100 px-4'
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
      footer={<Footer />}
    >
      <div className='max-w-[1440px] m-auto px-4 py-4'>{children}</div>
    </AppShell>
  );
};
