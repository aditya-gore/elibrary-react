import React from "react";
import styled from "styled-components";
import Book from "./Book";

const GridView = ({ books }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </div>
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
