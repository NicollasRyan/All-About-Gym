import {
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TrainingProps {
  id: number;
  pull: string;
  bentOverRow: string;
}

interface workoutInputProps {
  pull: string;
  bentOverRow: string;
}

interface workoutProviderProps {
  children: ReactNode;
}

interface ContextData {
  trainingWeeks: TrainingProps[];
  createTrainingWeeks: (trainingWeeks: workoutInputProps) => void;
}

export const WorkoutContext = createContext<ContextData>({} as ContextData);

export function WorkoutProvider({ children }: workoutProviderProps) {
  const [trainingWeeks, setTrainingWeeks] = useState<TrainingProps[]>([]);

  useEffect(() => {
    api
      .get("trainingWeek")
      .then((response) => setTrainingWeeks(response.data.trainingWeeks));
  }, []);

  function createTrainingWeeks(trainingWeeks: workoutInputProps) {
    api.post("/trainingWeek", trainingWeeks);
  }

  return (
    <WorkoutContext.Provider value={{ trainingWeeks, createTrainingWeeks }}>
      {children}
    </WorkoutContext.Provider>
  );
}
