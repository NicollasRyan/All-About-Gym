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
  // Back
  back?: string;
  bentOverRow?: string;
  frontHighPull?: string;
  benchRow?: string;
  pullclosed?: string;
  pullTriangle?: string;
  lowRow?: string;
  rowingHorse?: string;
  handsaw?: string;
  pulldown?: string;
  earth?: string;
  // Biceps
  dumbbellThread?: string;
  dumbbellHammer?: string;
  wBar?: string;
  threadRoper?: string;
  inclineBenchThread?: string;
  scottBank?: string;
  concentratedThread?: string;
  // Chest
  benchPress?: string;
  inclineBenchPress?: string;
  peckDeck?: string;
  benchPressSitting?: string;
  highCrossOver?: string;
  crossOverMedium?: string;
  crossOverBass?: string;
  // Leg
  barbellSquat?: string;
  sink?: string;
  rack?: string;
  legPress?: string;
  bugaro?: string;
  flexorTable?: string;
  flexorChair?: string;
  extensionChair?: string;
  abductor?: string;
  adductor?: string;
  pelvicElevation?: string;
  kick?: string;
  // Sholder
  sideRaise?: string;
  frontElevation?: string;
  development?: string;
  arnoldDevelopment?: string;
  crossLateralRaise?: string;
  inclinedLateralRaise?: string;
  reverseCrucifix?: string;
  // Triceps
  barTriceps?: string;
  ropeTriceps?: string;
  french?: string;
  closedBenchPress?: string;
  forehead?: string;
  foreheadPulley?: string;
}

interface workoutInputProps {
  // Back
  back?: string;
  bentOverRow?: string;
  frontHighPull?: string;
  benchRow?: string;
  pullclosed?: string;
  pullTriangle?: string;
  lowRow?: string;
  rowingHorse?: string;
  handsaw?: string;
  pulldown?: string;
  earth?: string;
  // Biceps
  dumbbellThread?: string;
  dumbbellHammer?: string;
  wBar?: string;
  threadRoper?: string;
  inclineBenchThread?: string;
  scottBank?: string;
  concentratedThread?: string;
  // Chest
  benchPress?: string;
  inclineBenchPress?: string;
  peckDeck?: string;
  benchPressSitting?: string;
  highCrossOver?: string;
  crossOverMedium?: string;
  crossOverBass?: string;
  // Leg
  barbellSquat?: string;
  sink?: string;
  rack?: string;
  legPress?: string;
  bugaro?: string;
  flexorTable?: string;
  flexorChair?: string;
  extensionChair?: string;
  abductor?: string;
  adductor?: string;
  pelvicElevation?: string;
  kick?: string;
  // Sholder
  sideRaise?: string;
  frontElevation?: string;
  development?: string;
  arnoldDevelopment?: string;
  crossLateralRaise?: string;
  inclinedLateralRaise?: string;
  reverseCrucifix?: string;
  // Triceps
  barTriceps?: string;
  ropeTriceps?: string;
  french?: string;
  closedBenchPress?: string;
  forehead?: string;
  foreheadPulley?: string;
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
