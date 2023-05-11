import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/Home";
import { Prioritization } from "./pages/Prioritization";
import { Hypertrophy } from "./pages/Hypertrophy";
import { Nutrition } from "./pages/Nutrition";
import { CreateWorkout } from "./pages/CreateWorkout";
import { TrainingWeek } from "./pages/TrainingWeek";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/trainingWeek", () => {
      return [
        {
          workout: "remada",
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/prioritization" element={<Prioritization />} />
          <Route path="/hypertrophy" element={<Hypertrophy />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/createworkout" element={<CreateWorkout />} />
          <Route
            path="/createworkout/:trainingWeek"
            element={<TrainingWeek />}
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
