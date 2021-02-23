import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    entries: [],
    entry: {},
    loading: false
}

const entrySlice = createSlice({
    name: 'entry',
  initialState,
  reducers: {
    loadingData(state, action) {
        return {
          ...state,
          loading: true
        };
      },
      setEntries(state, action) {
        return {
          ...state,
          entries: action.payload,
          loading: false
        };
      },
      setEntry(state, action) {
        return {
          ...state,
          entry: action.payload
        };
      },
      likeEntry(state, action) {
        let index = state.entries.findIndex(
          (entry) => entry.entryId === action.payload.entryId
        );
        state.entries[index] = action.payload;
        if (state.entry.entryId === action.payload.entryId) {
          state.entry = action.payload;
        }
        return {
          ...state
        };
      },
      unLikeEntry(state, action) {
        let index = state.entries.findIndex(
          (entry) => entry.entryId === action.payload.entryId
        );
        state.entries[index] = action.payload;
        if (state.entry.entryId === action.payload.entryId) {
          state.entry = action.payload;
        }
        return {
          ...state
        };
      },
      enterContest(state, action) {
        return {
          ...state,
          entries: [action.payload, ...state.entries]
        };
      },
      entryComment(state, action) {
        return {
          ...state,
          entry: {
            ...state.entry,
            comments: [action.payload, ...state.entry.entryComments]
          }
        };
      },
      voting(state, action) {
        let index = state.entries.findIndex(
          (entry) => entry.entryId === action.payload.entryId
        );
        state.entries[index] = action.payload;
        if (state.entry.entryId === action.payload.entryId) {
          state.entry = action.payload;
        }
        return {
          ...state
        };
      },
  }
})

export const { 
    loadingData,
    entryComment,
    enterContest,
    unLikeEntry,
    likeEntry,
    setEntries,
    setEntry
} = entrySlice.actions;

export default entrySlice.reducer;