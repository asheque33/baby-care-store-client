export const getCategoryNews = async (category: string) => {
  const res = await fetch(
    `https://baby-care-store-backend-sand.vercel.app/baby-accessories?category=${category}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
