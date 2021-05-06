import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "books",
    url: "/books",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text:
      "To provide free and open access to a broad range of books to all users.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text:
      "Books drive all of us. They give us a way to read and learn from what other people experienced in doing what we do.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text:
      "From Rig Veda to The White Tiger, from Chanakya to Amartya Sen, India has always been a land of books and scholars. ",
  },
];

export const books_url = "http://localhost:8000/api/list";

export const single_book_url = `http://localhost:8000/api/getBook/`;
