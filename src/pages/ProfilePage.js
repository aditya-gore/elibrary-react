import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";

const ProfilePage = () => {
  return (
    <main>
      <PageHero title="profile" />
      <Wrapper className="page">
        <h1>Profile Page</h1>
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

export default ProfilePage;
