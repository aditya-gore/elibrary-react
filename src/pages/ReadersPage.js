import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ReadersPage = () => {
  return (
    <main>
      <PageHero title="readers" />
      <Wrapper className="page">
        <h1>Readers Page</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .readers {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .readers {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ReadersPage;
