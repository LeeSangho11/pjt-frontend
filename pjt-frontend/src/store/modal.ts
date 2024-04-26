import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  id: String;
  isOpen: boolean;
}

const initialState: CounterState = {
  id: "",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.id = action.payload;
      state.isOpen = true;
    },
    closeModal(state, action) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
