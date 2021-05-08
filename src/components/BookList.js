import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const BookList = () => {
  const { filtered_books: books } = useFilterContext();

  return <GridView books={books}>Books</GridView>;
};

export default BookList;
