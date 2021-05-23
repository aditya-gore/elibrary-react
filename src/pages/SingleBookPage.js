import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useBooksContext } from "../context/books_context";
import { single_book_url as url } from "../utils/constants";
import { getGenre } from "../utils/helpers";
import {
  Loading,
  Error,
  BookImages,
  PageHero,
  BookOperations,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleBookPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    single_book_loading: loading,
    single_book_error: error,
    single_book,
    fetchSingleBook,
  } = useBooksContext();

  useEffect(() => {
    fetchSingleBook(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  while (single_book === undefined) {
    return <Loading />;
  }
  const { title, author, description, genre_id, numberInStock, image } =
    single_book;

  return (
    <Wrapper>
      <div className="page">
        <PageHero name={title} book />
        <div className="section section-center page">
          <Link to="/books" className="btn">
            back to books
          </Link>
          <div className="book-center">
            <BookImages image={image} />
            <section className="content">
              <h2>{title}</h2>
              <br />

              <p className="info">
                <span>Description : </span>
                {description}
              </p>
              <p className="info">
                <span>Author : </span>
                {author}
              </p>
              <p className="info">
                <span>Genre : </span>
                {getGenre(genre_id)}
              </p>
              <p className="info">
                <span>Available : </span>
                {numberInStock > 0
                  ? `${numberInStock} left in stock`
                  : "out of stock"}
              </p>

              <hr />
              <BookOperations book={single_book} />
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .book-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 600px;
    display: grid;
    white-space: pre-wrap;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .book-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
export default SingleBookPage;
