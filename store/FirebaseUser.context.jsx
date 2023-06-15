import React, { createContext, useState, useEffect, Children } from "react";
import { getCurrUser } from "../services/firebase.services";
import { getUserInformation } from "../services/firestore.db";

export const FirebaseContext = createContext();

export const FireBaseProvider = ({ children }) => {
  const [user, setuser] = useState();
  const [userId, setUserId] = useState()

  useEffect(() => {
    const data = async () => {
      const user = getCurrUser();
      const userDataBaseInformation = await getUserInformation(user.uid);
      setuser(userDataBaseInformation);
      setUserId(user.uid)
    };
    data();
  }, []);

  const val = {
    user ,
    userId
  }

  return (
    <FirebaseContext.Provider value={val}>{children}</FirebaseContext.Provider>
  );
};
