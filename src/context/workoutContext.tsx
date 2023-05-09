import { ReactNode, SetStateAction, createContext, useState } from "react";

interface workoutContextData {
  workout: string;
  setTraining: React.Dispatch<SetStateAction<string>>;
}

interface workoutProviderProps {
  children: ReactNode;
}

export const workoutContext = createContext<workoutContextData>(
  {} as workoutContextData
);

export function WorkoutProvider({ children }: workoutProviderProps) {
  const [training, setTraining] = useState("");

  return (
    <workoutContext.Provider value={{ workout: training, setTraining }}>
      {children}
    </workoutContext.Provider>
  );
}
