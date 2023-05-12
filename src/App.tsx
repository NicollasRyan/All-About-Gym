import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar";
import { WorkoutProvider } from "./context/workoutContext";

function App() {
  return (
    <WorkoutProvider>
      <Navbar />
      <Outlet />
      <GlobalStyle />
    </WorkoutProvider>
  );
}

export default App;
