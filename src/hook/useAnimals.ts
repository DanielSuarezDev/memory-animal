import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { listAnimalsService } from "../services/animals/animals.service";

type UseAnimals = {
  animals: any[];
  loading: boolean;
  error: any;
  loadAnimals: (pairsCount: number) => Promise<void>;
  setPairsCount: (pairsCount: number) => Promise<void>;
};

const useAnimals = create<UseAnimals>(
  devtools(
    persist(
      (set) => ({
        animals: [],
        loading: false,
        error: null,

        loadAnimals: async (pairsCount: number) => {
          set({ loading: true, error: null });

          try {
            const animals = await listAnimalsService(pairsCount);
            set({ animals, loading: false });
          } catch (error) {
            set({ error, loading: false });
          }
        },

        setPairsCount: async (pairsCount: number) => {
          set((state) => ({
            ...state,
            animals: state.animals.slice(0, pairsCount),
          }));
        },
      }),
      {
        name: "animals-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useAnimals;
