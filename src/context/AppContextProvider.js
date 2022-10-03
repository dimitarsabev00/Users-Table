import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../configs/firebase";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [readDataDB, setReadDataDB] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    getUsers();
  }, []);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setReadDataDB(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <AppContext.Provider value={{ isLoading, users, setUsers, readDataDB }}>
      {children}
    </AppContext.Provider>
  );
};

export const useContextApp = () => {
  return useContext(AppContext);
};
