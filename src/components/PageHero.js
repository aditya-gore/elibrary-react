import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ name, book, addBook = false }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {(book && <Link to="/books">/Books</Link>) ||
            (addBook && <Link to="/books">/Books</Link>)}
          /{name}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 9vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
