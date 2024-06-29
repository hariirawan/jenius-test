import { ResponseContactType } from "@/types/contacts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ResponseContactType = {
  data: [],
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<ResponseContactType>) => {
      return {
        ...state.data,
        data: action.payload?.data,
        message: action.payload.message,
      };
    },
  },
});

export const { setContacts } = contactSlice.actions;

export default contactSlice.reducer;
