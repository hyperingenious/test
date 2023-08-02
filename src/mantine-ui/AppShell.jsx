import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function AppShellDemo({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

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
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Header opened={opened} setOpened={setOpened} theme={theme} />}
      navbar={<Navbar opened={opened} />}
    >
      {children}
    </AppShell>
  );
}
