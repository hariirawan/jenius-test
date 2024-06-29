export type StatusType = {
  isGetting?: boolean;
  isGettingDetail?: boolean;
  isAdding?: boolean;
  isDeleting?: boolean;
  isVisibleForm?: boolean;
};

export type InitialStateType = StatusType & {
  data: ContactType[];
  message: string;
  initialForm: ContactType;
};

export type ContactType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number | null;
  photo: string;
};
