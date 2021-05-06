import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/books_reducer";
import { books_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_BOOKS_BEGIN,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_SINGLE_BOOK_BEGIN,
  GET_SINGLE_BOOK_SUCCESS,
  GET_SINGLE_BOOK_ERROR,
} from "../actions";

const initialState = {
  isSideBarOpen: false,
  books_loading: false,
  books_error: false,
  books: [],
  featured_books: [],
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

  const fetchBooks = async (url) => {
    dispatch({ type: GET_BOOKS_BEGIN });
    try {
      const response = await axios.get(url);
      const books = response.data;
      dispatch({ type: GET_BOOKS_SUCCESS, payload: books });
    } catch (error) {
      dispatch({ type: GET_BOOKS_ERROR });
    }
  };

  useEffect(() => {
    fetchBooks(url);
  }, []);

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
