import axios from "axios";

import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext();
const USER_API = "http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const [hasAccount, setHasAccount] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSignUp = async (newUser) => {
    const arr = await axios.get(USER_API);
    for (const key in arr.data) {
      const element = arr.data[key].name;
      if (newUser.name == element) {
        alert("Такой пользователь уже зарегестрирован");
        newUser = {
          name: "",
        };
      }
      break;
    }
    if (newUser.name == "" && newUser.password == "") {
      setLoginError(true);
      setPasswordError(true);
    } else if (newUser.password == "") {
      setPasswordError(true);
    } else if (newUser.name == "") {
      setLoginError(true);
    } else {
      const res = await axios.post(USER_API, newUser);
    }
  };

  let value = {
    hasAccount,
    setHasAccount,
    handleSignUp,
    setPasswordError,
    passwordError,
    loginError,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
