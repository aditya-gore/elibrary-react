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
import { getGenre } from "../utils/helpers";

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
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_BOOKS) {
    const { all_books } = state;
    const { text, genres } = state.filters;
    let tempBooks = [...all_books];
    // Searching
    if (text) {
      let searchedBooks = [];
      for (let book of tempBooks) {
        if (book.title.toLowerCase().startsWith(text.toLowerCase())) {
          if (!searchedBooks.some((b) => b === book)) {
            searchedBooks.push(book);
          }
        }
        if (book.author.toLowerCase().startsWith(text.toLowerCase())) {
          if (!searchedBooks.some((b) => b === book)) {
            searchedBooks.push(book);
          }
        }
      }
      tempBooks = searchedBooks;
    }
    // Filtering
    if (genres !== "all") {
      tempBooks = tempBooks.filter(
        (book) => getGenre(book.genre_id) === genres
      );
    }
    return { ...state, filtered_books: tempBooks };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        genres: "all",
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
