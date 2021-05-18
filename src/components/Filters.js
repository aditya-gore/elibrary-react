import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, getGenre } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Filters = ({ user }) => {
  const currentUser = user || false;
  const {
    filters: { text, genres },
    updateFilters,
    clearFilters,
    all_books,
  } = useFilterContext();

  const genresId = getUniqueValues(all_books, "genre_id");
  const genreNames = [];
  for (let id of genresId) {
    genreNames.push(getGenre(id));
  }

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search..."
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}

          {/* genres */}
          <div className="form-control">
            <h5>genres</h5>
            <div>
              {genreNames.map((g, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="genres"
                    type="button"
                    className={`${genres === g ? "active" : null}`}
                  >
                    {g}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of genres */}
        </form>
        {/* clear filters */}
        <div className="form-control">
          <Link
            to="#"
            type="button"
            className="clear-btn"
            onClick={clearFilters}
          >
            Clear Filters
          </Link>
        </div>
        {/* end of clear filters */}
        <hr />
        {currentUser && console.log(user)}
        {currentUser.isAdmin ? (
          <div className="form-control">
            <h5>admin only</h5>
            <Link className="addBook-btn" to="/addBook">
              Add Book
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .addBook-btn {
    background: var(--clr-primary-6);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
