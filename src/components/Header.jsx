import {Header as HeaderComponent, MediaQuery, Burger, Text} from '@mantine/core'


function Header({opened, setOpened, theme}) { 
    return (
      <HeaderComponent height={{ base: 50, md: 70 }} p="md">
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>

          <Text>Application header</Text>
        </div>
      </HeaderComponent>
    );
}

export default Header
