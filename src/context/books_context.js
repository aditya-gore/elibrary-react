import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/books_reducer";
import { books_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  isSideBarOpen: false,
};

const BooksContext = React.createContext();

export const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSideBar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <BooksContext.Provider value={{ ...state, openSideBar, closeSideBar }}>
      {children}
    </BooksContext.Provider>
  );
};
// make sure use
export const useBooksContext = () => {
  return useContext(BooksContext);
};
