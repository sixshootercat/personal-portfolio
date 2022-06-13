import { MoonIcon, SunIcon } from "@/components/icons";
import { Box, useMantineColorScheme } from "@mantine/core";

export const ThemeIcon = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Box sx={{ cursor: "pointer" }}>
      {dark ? (
        <SunIcon onClick={() => toggleColorScheme()} />
      ) : (
        <MoonIcon onClick={() => toggleColorScheme()} />
      )}
    </Box>
  );
};
