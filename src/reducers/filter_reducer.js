import {
  LOAD_BOOKS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_BOOKS,
  UPDATE_FILTERS,
  FILTER_BOOKS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_BOOKS) {
    return {
      ...state,
      all_books: [...action.payload],
      filtered_books: [...action.payload],
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_BOOKS) {
    const { sort, filtered_books } = state;
    let tempBooks = [...filtered_books];
    if (sort === "stock-lowest") {
      tempBooks = tempBooks.sort((a, b) => a.numberInStock - b.numberInStock);
    }
    if (sort === "stock-highest") {
      tempBooks = tempBooks.sort((a, b) => b.numberInStock - a.numberInStock);
    }
    if (sort === "title-a") {
      tempBooks = tempBooks.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (sort === "title-z") {
      tempBooks = tempBooks.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    return { ...state, filtered_books: tempBooks };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
