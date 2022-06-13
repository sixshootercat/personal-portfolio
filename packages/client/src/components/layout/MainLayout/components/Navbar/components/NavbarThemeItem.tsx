import { NavbarItem } from ".";
import { Space, Text, useMantineColorScheme } from "@mantine/core";
import { ThemeIcon } from "@/components/icons";

type NavbarThemeItemProps = {
  onClick: () => void;
};

export const NavbarThemeItem = ({ onClick }: NavbarThemeItemProps) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <NavbarItem dividerEl={false} onClick={onClick}>
      <Text>{dark ? "Light" : "Dark"}</Text>
      <Space w="xs" />
      <ThemeIcon />
    </NavbarItem>
  );
};
