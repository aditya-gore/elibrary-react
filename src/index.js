import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BooksProvider } from "./context/books_context";
import { FilterProvider } from "./context/filter_context";
import axios from "axios";
import { UserProvider } from "./context/user_context";

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
