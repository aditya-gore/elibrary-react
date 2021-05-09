import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_BOOKS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_BOOKS,
  UPDATE_FILTERS,
  FILTER_BOOKS,
  CLEAR_FILTERS,
} from "../actions";
import { useBooksContext } from "./books_context";

const initialState = {
  filtered_books: [],
  all_books: [],
  grid_view: true,
  sort: "title-a",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { books } = useBooksContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_BOOKS, payload: books });
  }, [books]);

  useEffect(() => {
    dispatch({ type: SORT_BOOKS });
  }, [books, state.sort]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
