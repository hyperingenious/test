import { Outlet } from "react-router-dom"
import AppShell from "../mantine-ui/AppShell"

function HomePage() {
  return (
    <AppShell>
      <Outlet/>
    </AppShell>
  )
}

export default HomePage
