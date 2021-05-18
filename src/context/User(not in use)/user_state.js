import React, { useContext, useReducer } from "react";
import { UserContext } from "./user_context";
import UserReducer from "./user_reducer";

export const useUser = () => {
  const { state, dispatch } = useContext(UserContext);
  return [state, dispatch];
};

export const UserState = ({ children }) => {
  const initialState = {
    user: {},
    loading: false,
    error: false,
    message: "",
    login: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
