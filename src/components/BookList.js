import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const BookList = () => {
  const { filtered_books: books, grid_view } = useFilterContext();

  if (books.length < 1) {
    return (
      <h4 style={{ textTransform: "none" }}>
        Sorry, no books match your search...
      </h4>
    );
  }
  if (!grid_view) {
    return <ListView books={books} />;
  }

  return <GridView books={books}>Books</GridView>;
};

export default BookList;
