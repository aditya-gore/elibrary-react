import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BooksProvider } from "./context/books_context";
import { FilterProvider } from "./context/filter_context";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <BooksProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </BooksProvider>,
  document.getElementById("root")
);
