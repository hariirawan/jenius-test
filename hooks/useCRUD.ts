import { useDispatch } from "@/store";
import { setContacts } from "@/store/reducers/contact";
import axios from "axios";
import React, { useCallback, useEffect } from "react";

const url = "https://contact.herokuapp.com/contact";

const useCRUD = () => {
  const dispatch = useDispatch();

  const handleFetchData = useCallback(() => {
    axios.get(url).then((res) => {
      dispatch(setContacts(res.data));
    });
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return {};
};

export default useCRUD;
