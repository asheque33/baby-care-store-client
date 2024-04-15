import Link from "next/link";
import React from "react";

const TopCategoriesProducts = () => {
  return (
    <div>
      <h1 className="md:text-4xl text-center mt-4 md:font-semibold ">
        Top Categories
      </h1>
      <i>
        <p className="text-center text-slate-400 mt-1.5 mb-4">
          Top categories has gotten places in terms of their selling feedback
          given by the user.
        </p>
      </i>
      <div className="grid md:grid-cols-3 gap-4 h-96 text-white text-xl font-medium ">
        <Link
          href="/baby-accessories?category=baby bathtub"
          className="bg-[#A6A6A6] rounded-xl flex items-end ps-6 pb-6 justify-start hover:scale-105 hover:transition-all"
        >
          Baby BathTub
        </Link>

        <div className="grid grid-rows-2 gap-y-6">
          <Link
            href="/baby-accessories?category=feeding bottle"
            className="bg-[#A6A6A6] rounded-xl flex items-end ps-6 pb-3 justify-start hover:scale-105 hover:transition-all"
          >
            Feeding Bottle
          </Link>
          <Link
            href="/baby-accessories?category=baby potty seat"
            className="bg-[#A6A6A6] rounded-xl flex items-end ps-6 pb-3 justify-start hover:scale-105 hover:transition-all"
          >
            Baby Potty Seat
          </Link>
        </div>
        <Link
          href="/baby-accessories?category=baby oral care"
          className="bg-[#A6A6A6] rounded-xl flex items-end ps-6 pb-6 justify-start hover:scale-105 hover:transition-all "
        >
          Baby Oral Care
        </Link>
      </div>
      <div className="w-[12%] mt-6 mb-8 mx-auto">
        <Link href="/baby-accessories">
          <button className="btn btn-neutral text-white btn-square rounded-full w-full px-8 py-2">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopCategoriesProducts;
