import {createSlice} from '@reduxjs/toolkit';

const tab_bar_visibility_slice = createSlice({
  name: 'tab_bar_visibility',
  initialState: true,
  reducers: {
    setVisibility(state, {payload}) {
      return payload;
    },

    toggleVisibilty(state, {payload}) {
      return !state;
    },
  },
});

export const {setVisibility, toggleVisibilty} =
  tab_bar_visibility_slice.actions;

export default tab_bar_visibility_slice.reducer;
