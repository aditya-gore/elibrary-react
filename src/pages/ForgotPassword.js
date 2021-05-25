import React, { useState } from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import axios from "axios";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ForgotPassword = () => {
  const emailSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    // try {
    //   await axios.post("forgot", { email });
    //   Swal.fire({
    //     position: "center",
    //     type: "success",
    //     title: "Password reset link has been sent to your email.",
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });
    // } catch (error) {
    //   Swal.fire("Falied", `${error.response.data.error}`, "error");
    // }
  };
  return (
    <main>
      <PageHero name="forgot password" />
      <Wrapper className="page">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Enter your email...</h1>
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email")}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{errors?.email?.message}</p>

          <button type="submit">Send Email</button>
        </form>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .form {
    /* Size and position */
    width: 350px;
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
  .form p {
    font-family: "Raleway", "Lato", Arial, sans-serif;
    color: #ff5c33;
  }

  .form input[type="text"],
  .form input[type="password"] {
    /* Size and position */
    width: 100%;
    padding: 8px 4px 8px 10px;
    margin-bottom: 15px;

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

  .form input[type="text"]:focus,
  .form input[type="password"]:focus,
  .form input[type="submit"]:focus {
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(255, 255, 255, 0.15);
    outline: none;
  }

  /* Fallback */
  .no-boxshadow .form input[type="text"]:focus,
  .no-boxshadow .form input[type="password"]:focus {
    outline: 1px solid white;
  }

  .form button[type="submit"] {
    /* Size and position */
    width: 100%;
    padding: 8px 5px;

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
  .form button[type="submit"] {
    /* Size and position */
    width: 100%;
    padding: 8px 5px;

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

  .form button[type="submit"]:hover {
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),
      inset 0 20px 30px rgba(99, 64, 86, 0.5);
  }

  /* Fallback */
  .no-boxshadow .form button[type="submit"]:hover {
    background: #594642;
  }
`;
export default ForgotPassword;
