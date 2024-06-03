import { createSlice } from "@reduxjs/toolkit";
export type TInitialState = { isOpen: boolean };
const initialState: TInitialState = {
  isOpen: false,
};
const sidebarSlice = createSlice({
  name: "sidebarTrigger",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
