import React from "react";
import { FaHeart, FaUserMinus, FaUserPlus, FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { useBooksContext } from "../context/books_context";

import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSideBar } = useBooksContext();
  return (
    <Wrapper className="cart-btn-wrapper">
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
export default CartButtons;
