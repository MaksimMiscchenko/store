import axios from "axios";
import { USERS_API } from "./helpers";
import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [newLoginError, setNewLoginError] = useState(false);
  const [userIsLoggedIn, setUserLoggedIn] = useState(false);

  const handleSignUp = async (newUser) => {
    const arr = await axios.get(USERS_API);
    for (const key in arr.data) {
      const element = arr.data[key].name;
      if (newUser.name.toLowerCase() == element.toLowerCase()) {
        alert("Такой пользователь уже зарегестрирован");
        return false;
      }
    }
    if (newUser.name == "" && newUser.password == "") {
      setNewLoginError(true);
      setNewPasswordError(true);
    } else if (newUser.password == "") {
      setNewPasswordError(true);
    } else if (newUser.name == "") {
      setNewLoginError(true);
    } else if (newUser.name.length < 4 || newUser.password.length < 4) {
      alert("Логин и пароль должны быть больше 4 символов");
    } else {
      const res = await axios.post(USERS_API, newUser);
      handleSignIn();
    }
  };

  const handleSignIn = async () => {
    setUserLoggedIn(true);
  };

  const checkUser = async (user) => {
    try {
      const res = await axios.get(USERS_API);
      for (const value of res.data) {
        if (
          user.name.toLowerCase() == value.name.toLowerCase() &&
          user.password == value.password
        ) {
          handleSignIn();
          break;
        } else {
          console.log("error");
        }
      }

      return res.data;
    } catch (err) {
      if (err.response.status === 404) {
        return null;
      }
      throw err;
    }
  };

  const handleLogOut = () => {
    setUserLoggedIn(false);
  };
  let value = {
    hasAccount,
    setHasAccount,
    handleSignUp,
    setNewPasswordError,
    newPasswordError,
    newLoginError,
    checkUser,
    userIsLoggedIn,
    handleLogOut,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
