export type ResponseContactType = {
  data: ContactType[];
  message: string;
};

export type ContactType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
};
