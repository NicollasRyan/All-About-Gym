import {
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TrainingProps {
  back: TypeBack;
}

type TypeBack = {
  id?: number;
  pull: string;
  bentOverRow: string;
};

interface workoutInputProps {
  back: TypeBack;
}

interface workoutProviderProps {
  children: ReactNode;
}

interface ContextData {
  trainingWeeks: TrainingProps[];
  createTrainingWeeks: (trainingWeeks: workoutInputProps) => Promise<void>;
}

export const FridayContext = createContext<ContextData>({} as ContextData);

export function FridayProvider({ children }: workoutProviderProps) {
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
    <FridayContext.Provider value={{ trainingWeeks, createTrainingWeeks }}>
      {children}
    </FridayContext.Provider>
  );
}
