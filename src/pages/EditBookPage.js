import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Loading, Error, PageHero } from "../components";
import { useParams, useHistory } from "react-router-dom";
import { useBooksContext } from "../context/books_context";
import { single_book_url as url } from "../utils/constants";
import { base_url as image_prefix_url } from "../utils/constants";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const EditBookPage = (props) => {
  const fileInputRef = useRef();

  const [preview, setPreview] = useState();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [numberInStock, setNumberInStock] = useState("");
  const id = props.match.params.id;
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
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  });
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  const handleImage = (e) => {
    if (e.target.files.length) {
      setImage(e.target.files[0]);
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  while (single_book === undefined) {
    return <Loading />;
  }

  const {
    title: _title,
    author: _author,
    description: _description,
    genre_id: _genre_id,
    numberInStock: _numberInStock,
    image: _image,
  } = single_book;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) setTitle(_title);
    if (!author) setAuthor(_author);
    if (!description) setDescription(_description);
    if (!genre) setGenre(_genre_id);
    if (!numberInStock) setNumberInStock(_numberInStock);

    const formData = new FormData();
    if (image) formData.append("image", image);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("genre_id", genre);
    formData.append("numberInStock", numberInStock);
    const result = await axios.post(`saveBook/${id}`, formData);
    if (result.status === 200) {
      Swal.fire({
        position: "center",
        type: "success",
        title: "Changes saved successfully!",
        showConfirmButton: false,
        timer: 2000,
      }).then(function () {
        window.location.replace(`/books/${id}`);
      });
    } else {
      Swal.fire("Operation failed", "Error", "warning");
    }
  };

  return (
    <Wrapper>
      <PageHero name="edit book" addBook={true} />
      <div className=" page">
        <div className="row form">
          <form onSubmit={handleSubmit}>
            <div className="column">
              {preview ? (
                <img
                  src={preview}
                  alt="image"
                  style={{
                    width: "200px",
                    height: "250px",
                    cursor: "pointer",
                    borderRadius: "5%",
                    marginLeft: "25%",
                    marginBottom: "2rem",
                    objectFit: "fill",
                  }}
                  onClick={() => {
                    setImage(null);
                  }}
                />
              ) : (
                <img
                  src={image_prefix_url + _image}
                  style={{
                    width: "200px",
                    height: "250px",
                    cursor: "pointer",
                    borderRadius: "5%",
                    marginLeft: "25%",
                    marginBottom: "2rem",
                    objectFit: "fill",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click();
                  }}
                />
              )}
              <input
                type="file"
                name="image"
                id="image"
                style={{ display: "none" }}
                placeholder="Image"
                accept="image/*"
                onChange={handleImage}
                ref={fileInputRef}
              />
            </div>

            <div className="column">
              <label htmlFor="title">Title : </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={_title}
              />

              <label htmlFor="author">Author : </label>
              <input
                type="text"
                name="author"
                defaultValue={_author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
              />

              <label htmlFor="description">Description : </label>
              <textarea
                name="description"
                rows="10"
                cols="10"
                wrap="hard"
                maxLength="1000"
                placeholder="Description"
                defaultValue={_description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <label htmlFor="genre">Genre : </label>
              <select
                name="genre"
                id="genres"
                defaultValue={_genre_id}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option>Select Genre...</option>
                <option value="1">Technology</option>
                <option value="2">Fiction</option>
                <option value="3">Non-Fiction</option>
              </select>

              <label htmlFor="numberInStock">Number of copies : </label>
              <input
                type="number"
                name="numberInStock"
                placeholder="Available in stock"
                min="1"
                defaultValue={_numberInStock}
                onChange={(e) => setNumberInStock(e.target.value)}
              />

              <button className="btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  column {
    float: left;
    width: 50%;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .form {
    /* Size and position */
    width: 450px;
    margin: 60px auto 30px;
    padding: 10px;
    position: relative;

    /* Font styles */
    font-family: "Raleway", "Lato", Arial, sans-serif;
    color: black;
    text-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
  }

  .form h1 {
    font-size: 22px;
    padding-bottom: 20px;
    text-align: center;
  }

  .form input[type="text"],
  .form input[type="password"],
  .form input[type="number"],
  .form input[type="file"],
  .form select,
  .form textarea {
    /* Size and position */
    width: 100%;
    padding: 8px 4px 8px 10px;
    margin-bottom: 15px;
    resize: none;
    /* Styles */
    border: 1px solid #4e3043; /* Fallback */
    border: 1px solid rgba(78, 48, 67, 0.8);
    background: rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 1px 1px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;

    /* Font styles */
    font-family: "Raleway", "Lato", Arial, sans-serif;
    color: black;
    font-size: 13px;
  }
  .form input::-webkit-input-placeholder {
    color: rgba(37, 21, 26, 0.5);
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .form input:-moz-placeholder {
    color: rgba(37, 21, 26, 0.5);
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .form input:-ms-input-placeholder {
    color: rgba(37, 21, 26, 0.5);
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  .form input[type="text"]:hover,
  .form input[type="password"]:hover {
    border-color: --clr-primary-4;
  }

  .form input[type="submit"]:focus {
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(255, 255, 255, 0.15);
    outline: none;
  }

  .form button[type="submit"],
  .form button[type="clear"] {
    /* Size and position */
    width: 100%;
    padding: 8px 5px;
    margin-top: 1rem;

    /* Styles */
    background: linear-gradient(rgba(99, 64, 86, 0.5), rgba(76, 49, 65, 0.7));
    border-radius: 5px;
    border: 1px solid #4e3043;
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.4),
      0 2px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease-out;

    /* Font styles */
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    font-size: 16px;
    font-weight: bold;
    font-family: "Raleway", "Lato", Arial, sans-serif;
  }

  .form button[type="clear"]:hover,
  .form button[type="submit"]:hover,
  .form button:hover {
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),
      inset 0 20px 30px rgba(99, 64, 86, 0.5);
  }

  /* Fallback */
  .no-boxshadow .form button[type="submit"]:hover {
    background: #594642;
  }
`;
export default withRouter(EditBookPage);
