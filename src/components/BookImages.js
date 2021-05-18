import React, { useState } from "react";
import styled from "styled-components";
import { base_url as url } from "../utils/constants";

const BookImages = ({ image = "" }) => {
  return (
    <Wrapper>
      <img src={url + image} alt="main image" className="main" />
      <div className="gallery"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 70%;
    display: block;
    border-radius: var(--radius);
    object-fit: scale;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default BookImages;
