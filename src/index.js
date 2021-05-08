import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BooksProvider } from "./context/books_context";
import { FilterProvider } from "./context/filter_context";

import { UserProvider } from "./context/user_context";

ReactDOM.render(
  <BooksProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </BooksProvider>,
  document.getElementById("root")
);
