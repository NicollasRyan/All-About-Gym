import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <GlobalStyle />
    </>
  );
}

export default App;
