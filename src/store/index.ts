import create from "zustand";

interface State {
  userName: string;
  setUserName: (name: string) => void;
  errors: number;
  incrementErrors: () => void;
  matches: number;
  incrementMatches: () => void;
  gameCompleted: boolean;
  setGameCompleted: (completed: boolean) => void;
  attempts: number;
  incrementAttempts: () => void;
  resetErrors: () => void;
  resetMatches: () => void;
  resetAttempts: () => void;
}

const useStore = create<State>((set) => ({
  userName: "",
  setUserName: (name: string) => set({ userName: name }),
  errors: 0,
  incrementErrors: () => set((state) => ({ errors: state.errors + 1 })),
  matches: 0,
  incrementMatches: () => set((state) => ({ matches: state.matches + 1 })),
  gameCompleted: false,
  setGameCompleted: (completed: boolean) => set({ gameCompleted: completed }),
  attempts: 0,
  incrementAttempts: () => set((state) => ({ attempts: state.attempts + 1 })),
  resetErrors: () => set({ errors: 0 }),
  resetMatches: () => set({ matches: 0 }),
  resetAttempts: () => set({ attempts: 0 }),
}));

export default useStore;