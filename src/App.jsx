import Test from "./mantine-ui/Test";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="notifications" element={"notification"} />
            <Route path="billing" element={"billing"} />
            <Route path="security" element={"secutiry"} />
            <Route path="keys" element={"keys"} />
            <Route path="database" element={"database"} />
            <Route path="authentication" element={"authentication"} />
            <Route path="settings" element={"settings"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
