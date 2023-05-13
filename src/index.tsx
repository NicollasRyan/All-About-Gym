import React from "react";
import ReactDOM from "react-dom/client";
import { Model, createServer } from "miragejs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/Home";
import { Prioritization } from "./pages/Prioritization";
import { Hypertrophy } from "./pages/Hypertrophy";
import { Nutrition } from "./pages/Nutrition";
import { CreateWorkout } from "./pages/CreateWorkout";
import { TrainingMonday } from "./pages/TrainingMonday";
import { TrainingFriday } from "./pages/TrainingFriday";
import { TrainingSaturday } from "./pages/TrainingSaturday";
import { TrainingThursday } from "./pages/TrainingThursday";
import { TrainingTuesday } from "./pages/TrainingTuesday";
import { TrainingWednesday } from "./pages/TrainingWednesday";
import { TrainingSunday } from "./pages/TrainingSunday";

createServer({
  models: {
    trainingWeek: Model,
  },

  seeds(server) {
    server.db.loadData({
      trainingWeeks: [
        {
          bentOverRow: "remada",
        },
        {
          pull: "puxada",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/trainingWeek", () => {
      return this.schema.all("trainingWeek");
    });

    this.post("/trainingWeek", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("trainingWeek", data);
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
          <Route path="/createworkout/segunda" element={<TrainingMonday />} />
          <Route path="/createworkout/sexta" element={<TrainingFriday />} />
          <Route path="/createworkout/sabado" element={<TrainingSaturday />} />
          <Route path="/createworkout/quinta" element={<TrainingThursday />} />
          <Route path="/createworkout/terça" element={<TrainingTuesday />} />
          <Route path="/createworkout/quarta" element={<TrainingWednesday />} />
          <Route path="/createworkout/domingo" element={<TrainingSunday />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
