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
  workout: string;
}

interface workoutProviderProps {
  children: ReactNode;
}

export const WorkoutContext = createContext<TrainingProps[]>([]);

export function WorkoutProvider({ children }: workoutProviderProps) {
  const [trainingWeeks, setTrainingWeeks] = useState<TrainingProps[]>([]);

  useEffect(() => {
    api
      .get("trainingWeek")
      .then((response) => setTrainingWeeks(response.data.trainingWeeks));
  }, []);

  return (
    <WorkoutContext.Provider value={trainingWeeks}>
      {children}
    </WorkoutContext.Provider>
  );
}
