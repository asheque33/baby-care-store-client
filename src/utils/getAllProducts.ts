export const getAllProducts = async () => {
  const res = await fetch(
    "https://baby-care-store-backend-sand.vercel.app/products",
    {
      cache: "no-store",
    }
  );
  return res.json();
};
