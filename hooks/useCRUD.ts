import { useDispatch } from "@/store";
import {
  setContacts,
  setInitialForm,
  setStatus,
} from "@/store/reducers/contact";
import { ContactType } from "@/types/contacts";
import axios from "axios";
import { useCallback, useEffect } from "react";

const url = "https://contact.herokuapp.com/contact";

const useCRUD = () => {
  const dispatch = useDispatch();

  const handleFetchData = useCallback(() => {
    dispatch(setStatus({ isGetting: true }));
    axios
      .get(url)
      .then((res) => {
        dispatch(setContacts({ ...res.data }));
      })
      .finally(() => {
        dispatch(setStatus({ isGetting: false }));
      });
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  const handleAddData = (values: ContactType) => {
    dispatch(setStatus({ isAdding: true }));
    axios
      .post(url, values)
      .then((res) => {
        handleFetchData();
      })
      .finally(() => {
        dispatch(setStatus({ isAdding: false }));
      });
  };

  const handleDeleteData = (id: string) => {
    dispatch(setStatus({ isDeleting: true }));
    axios
      .delete(`${url}/${id}`)
      .then(() => {
        handleFetchData();
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setStatus({ isDeleting: false }));
      });
  };

  const handleGetDatail = (id: string) => {
    dispatch(setStatus({ isGettingDetail: true, isVisibleForm: true }));
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        dispatch(setInitialForm(res.data.data));
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setStatus({ isGettingDetail: false }));
      });
  };

  const handleUpdate = (id: string, values: ContactType) => {
    dispatch(setStatus({ isAdding: true }));
    let data: any = { ...values };
    delete data.id;
    axios
      .put(`${url}/${id}`, data)
      .then((res) => {
        handleFetchData();
        dispatch(setInitialForm(null));
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setStatus({ isAdding: false, isVisibleForm: false }));
      });
  };

  return { handleAddData, handleDeleteData, handleGetDatail, handleUpdate };
};

export default useCRUD;
