import { create } from "zustand";

type ActionsStore = {
  openItemId: number | null;
  openMenu: (id: number) => void;
  closeMenu: () => void;
};

const useItemActionsList = create<ActionsStore>((set) => ({
  openItemId: null,
  openMenu: (id: number) => {
    set((state) => ({
      openItemId: state.openItemId === id ? null : id,
    }));
  },
  closeMenu: () => {
    set({ openItemId: null });
  },
}));

export default useItemActionsList;
