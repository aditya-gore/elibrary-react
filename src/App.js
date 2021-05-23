import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import axios from "axios";

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
  EmailVerified,
  EmailAlreadyVerified,
  ForgotPassword,
  ResetPassword,
  EditBook,
} from "./pages";

function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("user");
        const user = response.data;
        setUser(user);
      } catch (e) {
        setUser(null);
      }
    })();
  }, [login]);

  return (
    <Router>
      <Navbar user={user} setLogin={() => setLogin(false)} />
      <Sidebar user={user} setLogin={() => setLogin(false)} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/books">
          <Books user={user} />
        </Route>
        <Route exact path="/books/:id" children={<SingleBook />} />
        <Route exact path="/readers">
          <Readers />
        </Route>
        <Route exact path="/readers/:id" children={<SingleReader />} />

        <Route exact path="/addbook">
          <AddBook />
        </Route>
        <Route exact path={"/editbook/:id"}>
          <EditBook />
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
        <Route
          path="/login"
          component={() => <Login setLogin={() => setLogin(true)} />}
        />
        <Route
          path="/emailVerified"
          component={() => <EmailVerified setLogin={() => setLogin(true)} />}
        />
        <Route
          path="/emailAlreadyVerified"
          component={() => (
            <EmailAlreadyVerified setLogin={() => setLogin(true)} />
          )}
        />
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/reset/:token" component={ResetPassword} />

        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
