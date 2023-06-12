import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialContacts } from '../components/data/initialContacts';

const initialState = {
  list: initialContacts,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            name: text.name,
            number: text.number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.list = state.list.filter(contact => contact.id !== action.payload);
                
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);