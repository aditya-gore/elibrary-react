import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";

const BooksPage = () => {
  return <h4>Books page</h4>;
};

const Wrapper = styled.div`
  .books {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .books {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default BooksPage;
