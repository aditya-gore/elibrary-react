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

const books_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSideBarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSideBarOpen: false };
  }

  if (action.type === GET_BOOKS_BEGIN) {
    return { ...state, books_loading: true };
  }

  if (action.type === GET_BOOKS_SUCCESS) {
    const featured_books = action.payload;
    return {
      ...state,
      books_loading: false,
      books: action.payload,
      featured_books,
    };
  }
  if (action.type === GET_BOOKS_ERROR) {
    return { ...state, books_loading: false, books_error: true };
  }
  if (action.type === GET_SINGLE_BOOK_BEGIN) {
    return {
      ...state,
      single_book_loading: true,
      single_book_error: false,
    };
  }
  if (action.type === GET_SINGLE_BOOK_SUCCESS) {
    return {
      ...state,
      single_book_loading: false,
      single_book: action.payload,
    };
  }
  if (action.type === GET_SINGLE_BOOK_ERROR) {
    return {
      ...state,
      single_book_loading: false,
      single_book_error: true,
    };
  }

  // return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default books_reducer;
