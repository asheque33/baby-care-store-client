export const getAllCategories = async () => {
  const res = await fetch(
    "https://baby-care-store-backend-sand.vercel.app/categories"
  );

  return res.json();
};
