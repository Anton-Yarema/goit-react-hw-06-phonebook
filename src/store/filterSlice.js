import { createSlice } from '@reduxjs/toolkit';


const filtersInitialState = '';


const filterSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState,
  reducers: {
    filterContacts(state, {payload}) {
      return payload;
    },
  },
});


export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;