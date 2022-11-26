import create from "zustand";

const useStore = create((set) => ({
    currentChannelInfo: {},
    updateCurrentChannelInfo: (state) => set(() => ({ currentChannelInfo: state }))
}));

export default useStore;
