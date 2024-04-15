import BannerSection from "@/components/UI/HomePage/BannerSection/BannerSection";
import FlashSaleProducts from "@/components/UI/HomePage/FlashSale/FlashSaleProducts";
import TopCategoriesProducts from "@/components/UI/HomePage/TopCategories/TopCategories";
import TopRatedProducts from "@/components/UI/HomePage/TopRatedProducts/TopRatedProducts";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-[90%] mx-auto mb-12">
      <BannerSection />
      <FlashSaleProducts />
      <TopCategoriesProducts />
      <TopRatedProducts />
    </div>
  );
};

export default HomePage;
