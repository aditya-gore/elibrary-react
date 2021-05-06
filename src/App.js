import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Books,
  SingleBook,
  Readers,
  SingleReader,
  Login,
  Register,
  AddBook,
  AddReader,
  Wishlist,
  Profile,
  Error,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/books/:id" children={<SingleBook />} />
        <Route exact path="/readers">
          <Readers />
        </Route>
        <Route exact path="/readers/:id" children={<SingleReader />} />

        <Route exact path="/addbook">
          <AddBook />
        </Route>
        <Route exact path="/addreader">
          <AddReader />
        </Route>
        <Route exact path="/wishlist">
          <Wishlist />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
