import { Group, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { HEADER_ELEMS } from "../Header/Header.constants";
import { MenuOverlayThemeItem, MenuOverlayLinkItem } from "./components";

export const MockMenuOverlayElems = ({
  onItemClick,
}: {
  onItemClick: () => void;
}) => {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Group direction="column" sx={{ height: "100%", gap: 0 }}>
      {HEADER_ELEMS.map((el) => {
        return (
          <MenuOverlayLinkItem item={el} key={el.id} onClick={onItemClick} />
        );
      })}
      <MenuOverlayThemeItem onClick={() => toggleColorScheme()} />
    </Group>
  );
};
