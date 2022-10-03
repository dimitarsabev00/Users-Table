import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [readDataDB, setReadDataDB] = useState([]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        users,
        setUsers,
        setIsLoading,
        setReadDataDB,
        readDataDB,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextApp = () => {
  return useContext(AppContext);
};
