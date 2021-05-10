export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

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
