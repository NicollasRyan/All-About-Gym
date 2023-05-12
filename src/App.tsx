import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar";
import { workoutContext } from "./context/workoutContext";

function App() {
  return (
    <workoutContext.Provider value={[]}>
      <Navbar />
      <Outlet />
      <GlobalStyle />
    </workoutContext.Provider>
  );
}

export default App;
