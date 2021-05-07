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
};

export const getUniqueValues = () => {};
