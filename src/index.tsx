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

import { MondayProvider } from "./context/mondayContext";
import { FridayProvider } from "./context/fridayContext";
import { SaturdayProvider } from "./context/saturdayContext";
import { SundayProvider } from "./context/sundayContext";
import { ThursdayProvider } from "./context/thursdayContext";
import { TuesdayProvider } from "./context/tuesdayContext";
import { WednesdayProvider } from "./context/wednesdayContext";
import { Workouts } from "./pages/Workouts";
import { BackTraining } from "./pages/Workouts/BackTraining";
import { BicepsTraining } from "./pages/Workouts/BicepsTraining";
import { ChestTraining } from "./pages/Workouts/ChestTraining";
import { LegTraining } from "./pages/Workouts/LegTraining";
import { ShoulderTraining } from "./pages/Workouts/ShoulderTraining";
import { TricepsTraining } from "./pages/Workouts/TricepsTraining";
import { SubjectsHelpGym } from "./pages/SubjectsHelpGym";

createServer({
  models: {
    trainingWeek: Model,
  },

  seeds(server) {
    server.db.loadData({
      trainingWeeks: [],
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
    <FridayProvider>
      <MondayProvider>
        <SaturdayProvider>
          <SundayProvider>
            <ThursdayProvider>
              <TuesdayProvider>
                <WednesdayProvider>
                  <Router>
                    <Routes>
                      <Route element={<App />}>
                        <Route path="/" element={<Home />} />
                        <Route
                          path="/prioritization"
                          element={<Prioritization />}
                        />
                        <Route path="/hypertrophy" element={<Hypertrophy />} />
                        <Route path="/nutrition" element={<Nutrition />} />
                        <Route
                          path="/createworkout"
                          element={<CreateWorkout />}
                        />
                        <Route
                          path="/createworkout/segunda"
                          element={<TrainingMonday />}
                        />
                        <Route
                          path="/createworkout/sexta"
                          element={<TrainingFriday />}
                        />
                        <Route
                          path="/createworkout/sabado"
                          element={<TrainingSaturday />}
                        />
                        <Route
                          path="/createworkout/quinta"
                          element={<TrainingThursday />}
                        />
                        <Route
                          path="/createworkout/terca"
                          element={<TrainingTuesday />}
                        />
                        <Route
                          path="/createworkout/quarta"
                          element={<TrainingWednesday />}
                        />
                        <Route
                          path="/createworkout/domingo"
                          element={<TrainingSunday />}
                        />
                        <Route path="/workouts" element={<Workouts />} />
                        <Route
                          path="/workouts/back"
                          element={<BackTraining />}
                        />
                        <Route
                          path="/workouts/biceps"
                          element={<BicepsTraining />}
                        />
                        <Route
                          path="/workouts/chest"
                          element={<ChestTraining />}
                        />
                        <Route path="/workouts/leg" element={<LegTraining />} />
                        <Route
                          path="/workouts/shoulder"
                          element={<ShoulderTraining />}
                        />
                        <Route
                          path="/workouts/triceps"
                          element={<TricepsTraining />}
                        />
                        <Route
                          path="/SubjectsHelpGym"
                          element={<SubjectsHelpGym />}
                        />
                      </Route>
                    </Routes>
                  </Router>
                </WednesdayProvider>
              </TuesdayProvider>
            </ThursdayProvider>
          </SundayProvider>
        </SaturdayProvider>
      </MondayProvider>
    </FridayProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
