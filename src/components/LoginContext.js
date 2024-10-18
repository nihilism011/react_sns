import React, { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const value = {
    state: { isLoggedIn, userId, userName },
    actions: { setIsLoggedIn, setUserId, setUserName },
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };
