import React from "react";
import styled from "styled-components";
import { base_url as url } from "../utils/constants";

import { Link } from "react-router-dom";
const ListView = ({ books }) => {
  return (
    <Wrapper>
      {books.map((book) => {
        const { id, image, title, author, description, numberInStock } = book;
        return (
          <article key={id}>
            <img src={url + image} alt={title} />
            <div>
              <h4>{title}</h4>
              <h5 className="price">{author}</h5>
              <h6>In stock - {numberInStock}</h6>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/books/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 120px;
    height: 80%;
    object-fit: fit;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  h6 {
    color: var(--clr-grey-2);
    margin-bottom: 0.75rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
