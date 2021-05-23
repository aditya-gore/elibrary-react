import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";
import {
  FaCheck,
  FaEdit,
  FaRegTrashAlt,
  FaRegHeart,
  FaHeart,
  FaTrash,
} from "react-icons/fa";
import Loading from "./Loading";
import axios from "axios";

const BookOperations = (single_book) => {
  let { book } = single_book;
  while (book === undefined) {
    return <Loading />;
  }
  const { id } = book;

  const handleDelete = async (id) => {
    const result = await axios.delete("delete/" + id);
    if (result.status === 200) {
      Swal.fire("Book deleted successfully!", "success").then(function () {
        window.location.replace("/books");
      });
    } else {
      Swal.fire("Book could not get deleted", "Error", "warning");
    }
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <button className="btn">Read Now</button>
        <button className="heart">
          <FaRegHeart size={18} />
        </button>
        <Link to={`/editBook/${id}`} type="button" className="btn">
          <FaEdit size={18} />
        </Link>
        <button className="btn" onClick={() => handleDelete(id)}>
          <FaRegTrashAlt size={18} />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  link {
    text-align: center;
  }
  .colors {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: left;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: max-content max-content;
  }

  .btn {
    margin-top: 1rem;
    margin-right: 1rem;
    width: 140px;
    text-align: center;
  }
  .heart {
    margin-top: 1rem;
    margin-right: 1rem;
    width: 140px;
    text-transform: uppercase;
    background: hsl(22, 31%, 52%);
    color: hsl(22, 31%, 88%);
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    font-weight: 400;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    border-color: transparent;
  }
  .heart:hover {
    color: hsl(22, 28%, 21%);
    background: hsl(22, 31%, 67%);
  }
  .icon {
    margin-top: 1rem;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;

    margin-right: 0.5rem;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default BookOperations;
