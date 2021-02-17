import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    setOpen: false,
    content: ''
};

const booksSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
        state.setOpen = true;
        state.content = content;
    },
  },
});

console.log(booksSlice);

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer;