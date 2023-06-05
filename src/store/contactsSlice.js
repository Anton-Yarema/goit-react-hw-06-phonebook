import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = { items: [] };

const contactsSlice = createSlice({
  name: "contact",
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
        payload: {
          id: nanoid(),
          name,
          number,
          },
        };
      },
    },
    deleteContact(state, action) { 
     state.items = state.items.filter(item => item.id !== action.payload);
    }
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
