import { ContactType, InitialStateType, StatusType } from "@/types/contacts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialForm: ContactType = {
  id: "",
  firstName: "",
  age: null,
  lastName: "",
  photo:
    "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
};

const initialState: InitialStateType = {
  data: [],
  message: "",
  isGetting: false,
  isAdding: false,
  isDeleting: false,
  isVisibleForm: false,
  isGettingDetail: false,
  initialForm: initialForm,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusType>) => {
      return { ...state, ...action.payload };
    },
    setInitialForm: (state, action: PayloadAction<ContactType | null>) => {
      return {
        ...state,
        initialForm: action.payload ? action.payload : initialForm,
      };
    },
    setContacts: (state, action: PayloadAction<InitialStateType>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setContacts, setStatus, setInitialForm } = contactSlice.actions;

export default contactSlice.reducer;
