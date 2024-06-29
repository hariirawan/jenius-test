import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<any>) => {
      return { ...state.data, data: [] };
    },
  },
});

export const { setContacts } = contactSlice.actions;

export default contactSlice.reducer;
