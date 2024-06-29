// __tests__/contactSlice.test.tsx
import contactSlice, {
  setContacts,
  setInitialForm,
  setStatus,
} from "@/store/reducers/contact";

describe("contactSlice", () => {
  it("should have the correct initial state", () => {
    const state = contactSlice(undefined, { type: "" });
    expect(state).toEqual({
      data: [],
      message: "",
      isGetting: false,
      isAdding: false,
      isDeleting: false,
      isVisibleForm: false,
      isGettingDetail: false,
      initialForm: {
        id: "",
        firstName: "",
        age: null,
        lastName: "",
        photo:
          "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      },
    });
  });

  it("should update the state with setStatus action", () => {
    const state = contactSlice(
      {
        data: [],
        message: "",
        isGetting: false,
        isAdding: false,
        isDeleting: false,
        isVisibleForm: false,
        isGettingDetail: false,
        initialForm: {
          id: "",
          firstName: "",
          age: null,
          lastName: "",
          photo:
            "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
        },
      },
      setStatus({
        isGetting: true,
      })
    );
    expect(state).toEqual({
      data: [],
      message: "",
      isGetting: true,
      isAdding: false,
      isDeleting: false,
      isVisibleForm: false,
      isGettingDetail: false,
      initialForm: {
        id: "",
        firstName: "",
        age: null,
        lastName: "",
        photo:
          "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      },
    });
  });

  it("should update the state with setInitialForm action", () => {
    const state = contactSlice(
      {
        data: [],
        message: "",
        isGetting: false,
        isAdding: false,
        isDeleting: false,
        isVisibleForm: false,
        isGettingDetail: false,
        initialForm: {
          id: "",
          firstName: "",
          age: null,
          lastName: "",
          photo:
            "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
        },
      },
      setInitialForm({
        id: "123",
        firstName: "John",
        age: 30,
        lastName: "",
        photo:
          "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      })
    );
    expect(state).toEqual({
      data: [],
      message: "",
      isGetting: false,
      isAdding: false,
      isDeleting: false,
      isVisibleForm: false,
      isGettingDetail: false,
      initialForm: {
        id: "123",
        firstName: "John",
        age: 30,
        lastName: "",
        photo:
          "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      },
    });
  });

  it("should update the state with setContacts action", () => {
    const state = contactSlice(
      {
        data: [],
        message: "",
        isGetting: false,
        isAdding: false,
        isDeleting: false,
        isVisibleForm: false,
        isGettingDetail: false,
        initialForm: {
          id: "",
          firstName: "",
          age: null,
          lastName: "",
          photo:
            "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
        },
      },
      setContacts({
        data: [
          {
            id: "1",
            firstName: "Hari",
            lastName: "Irawan",
            age: 2,
            photo: "adsfa",
          },
          {
            id: "2",
            firstName: "Jane",
            lastName: "Days",
            age: 2,
            photo: "dfasd",
          },
        ],
        message: "Contacts updated!",
        initialForm: {
          id: "",
          firstName: "",
          lastName: "",
          age: null,
          photo:
            "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
        },
      })
    );
    expect(state).toEqual({
      data: [
        {
          id: "1",
          firstName: "Hari",
          lastName: "Irawan",
          age: 2,
          photo: "adsfa",
        },
        {
          id: "2",
          firstName: "Jane",
          lastName: "Days",
          age: 2,
          photo: "dfasd",
        },
      ],
      message: "Contacts updated!",
      isGetting: false,
      isAdding: false,
      isDeleting: false,
      isVisibleForm: false,
      isGettingDetail: false,
      initialForm: {
        id: "",
        firstName: "",
        age: null,
        lastName: "",
        photo:
          "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      },
    });
  });
});
