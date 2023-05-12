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
  createTrainingWeeks: (trainingWeeks: workoutInputProps) => Promise<void>;
}

export const WorkoutContext = createContext<ContextData>({} as ContextData);

export function WorkoutProvider({ children }: workoutProviderProps) {
  const [trainingWeeks, setTrainingWeeks] = useState<TrainingProps[]>([]);

  useEffect(() => {
    api
      .get("trainingWeek")
      .then((response) => setTrainingWeeks(response.data.trainingWeeks));
  }, []);

  async function createTrainingWeeks(trainingWeeksInput: workoutInputProps) {
    const response = await api.post("/trainingWeek", trainingWeeksInput);
    const { trainingWeek } = response.data;

    setTrainingWeeks([...trainingWeeks, trainingWeek]);
  }

  return (
    <WorkoutContext.Provider value={{ trainingWeeks, createTrainingWeeks }}>
      {children}
    </WorkoutContext.Provider>
  );
}
