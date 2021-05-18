import React, { useEffect } from "react";
import { FaHeart, FaUserMinus, FaUserPlus, FaUser } from "react-icons/fa";

import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useBooksContext } from "../context/books_context";
import axios from "axios";

const UserButtons = ({ user, setLogin }) => {
  const { closeSideBar } = useBooksContext();
  const history = useHistory();
  const logout = async () => {
    await axios.post("logout");
    closeSideBar();
    setLogin(false);
    history.push("/");
  };
  return (
    <Wrapper className="cart-btn-wrapper">
      {user && (
        <Wrapper className="cart-btn-wrapper">
          <Link
            to="/wishlist"
            type="button"
            className="auth-btn"
            onClick={closeSideBar}
          >
            Wishlist
          </Link>
          <Link to="/" onClick={logout} type="button" className="auth-btn">
            Logout
          </Link>
        </Wrapper>
      )}

      {!user && (
        <Wrapper className="cart0btn-wrapper">
          <Link
            to="/login"
            type="button"
            className="auth-btn"
            onClick={closeSideBar}
          >
            Login
          </Link>
          <Link
            to="/register"
            type="button"
            className="auth-btn"
            onClick={closeSideBar}
          >
            Register
          </Link>
        </Wrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 220px;
  padding: 20px;

  .auth-btn {
    display: flex;
    margin: 20px;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    &:hover {
      border-bottom: 2px solid var(--clr-primary-7);
    }
  }
`;
export default UserButtons;
