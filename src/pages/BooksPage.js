import React from "react";
import styled from "styled-components";
import { Filters, BookList, Sort, PageHero } from "../components";

const BooksPage = ({ user }) => {
  return (
    <main>
      <PageHero name="books" />
      <Wrapper className="page">
        <div className="section-center books">
          <Filters user={user} />
          <div>
            <Sort />
            <BookList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
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
