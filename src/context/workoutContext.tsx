import { ReactNode, SetStateAction, createContext, useState } from "react";

interface workoutContextData {
  workout: string;
  setTraining: React.Dispatch<SetStateAction<string>>;
}

interface workoutInputProps {
  workout: string;
}

interface workoutProviderProps {
  children: ReactNode;
}

export const workoutContext = createContext([]);

export function WorkoutProvider({ children }: workoutProviderProps) {
  const [training, setTraining] = useState("");

  async function createWorkout(workoutInput: workoutInputProps) {}

  return (
    <workoutContext.Provider value={[]}>{children}</workoutContext.Provider>
  );
}
