import React, { useState } from "react";
import styled from "styled-components";
import Book from "./Book";
import usePagination from "../utils/usePagination";
import { Pagination } from "@material-ui/lab";

const GridView = ({ books }) => {
  let [page, setPage] = useState(1);
  const pageSize = 6;
  const count = Math.ceil(books.length / pageSize);
  const _books = usePagination(books, pageSize);

  const handleChange = (e, p) => {
    setPage(p);
    _books.jump(p);
  };
  return (
    <Wrapper>
      <div className="products-container">
        {_books.currentData().map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </div>

      {/* pagination... */}
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        className="pagination"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 425px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  .pagination{
    margin : 20px;
  }
  @media (min-width: 520px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
    img {
      height: 324px;
    }
  }

  @media (min-width: 700px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
    img {
      height: 325px;
    }
  }
  @media (min-width: 1020px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
    img {
      height: 325px;
    }
    @media (min-width: 1200px) {
        .products-container {
          grid-template-columns: repeat(3, 1fr);
        }
        img {
          height: 400px;
        }
  }
`;

export default GridView;
