import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    usernames: []
};

const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    getUsernames() {},
    setUsernames(state, action) {
      // How to print state in this function; for future use.
      // console.log(JSON.stringify(state, undefined, 2))
      return {
        ...state,
        usernames: action.payload
      }
    },
  },
});


export const { getUsernames, setUsernames } = usernameSlice.actions;

export default usernameSlice.reducer;