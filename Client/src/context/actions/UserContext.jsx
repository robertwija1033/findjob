import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  onAuthStateChangedListener,
} from "../../utils/firebase";
import UserReducer from "../reducers/UserReducer";
import UserType from "../types/UserType";

const UserContext = createContext({
  user: null,
  setUser: () => null,
});

const INITIAL_STATE = {
  user: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const { user } = state;
  const setUser = (user) => {
    dispatch({ type: UserType.SET_USER, payload: user });
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .post("http://localhost/findjob/Server/client/user.php", {
        url: "Register/useEffect",
        email: localStorage.getItem("email"),
      })
      .then(function (response) {
        setUser(response.data[0]);
      });
  };
  const value = { user, setUser };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }

  //     setUser(user);
  //   });

  //   return unsubscribe;
  // }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
