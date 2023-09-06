import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { ModalState } from "@/interfaces";

const initialState: ModalState = {
  modalType: null,
  modalProps: {},
  show: false,
  children: null,
};

const modalSlice = createSlice({
  name: "[MODAL]",
  initialState,
  reducers: {
    showModal: (state, action) => {
      const { payload } = action;

      state.show = true;
      state = { ...payload };
    },
    hideModal: (state) => {
      state = initialState;
    },
  },
});

export { modalSlice };

// Actions
export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;