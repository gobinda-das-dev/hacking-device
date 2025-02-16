import { create } from 'zustand';

const textStore = create((set) => ({
  text: '121',
  setText: (newText) => set({ text: newText }),
  clearText: () => set({ text: '' }),
  writeText: (newText) => set((state) => ({ text: state.text + newText })),
  removeLastCharacter: () => set((state) => ({ text: state.text.slice(0, -1) })),
}));

export default textStore;