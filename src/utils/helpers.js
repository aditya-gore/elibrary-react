export const getGenre = (genre_id) => {
  if (genre_id === 1) return "Technology";
  if (genre_id === 2) return "Fiction";
  if (genre_id === 3) return "Non Fiction";
  return "all";
};

export const getGenreID = (genre) => {
  if (genre === "Technology") return 1;
  if (genre === "Fiction") return 2;
  if (genre === "Non Fiction") return 3;
  return "all";
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ["all", ...new Set(unique)];
};

export const paginate = (books) => {
  const itemsPerPage = 3;
  const pages = Math.ceil(books.length / itemsPerPage);

  const newBooks = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return books.slice(start, start + itemsPerPage);
  });
  return newBooks;
};
