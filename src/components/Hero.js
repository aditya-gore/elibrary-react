import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import background4 from "../assets/background4.jpg";
import bg2 from "../assets/bg2.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          "readers are <br />
          leaders..."
        </h1>
        <p>
          Given that you read the right books, you couldn't help but be
          healthier, happier, and financially more successful as a result of
          just reading more.
          <br /> Should you ever find yourself in dire circumstances, remember
          that although you might lose everything else—knowledge can never be
          taken from you.
        </p>
        <Link to="/books" className="btn hero-btn">
          read now
        </Link>
      </article>
      <article className="img-container">
        <img src={background4} alt="home library" className="main-img" />
        <img
          src={bg2}
          alt="random hand picking up a book"
          className="accent-img"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
