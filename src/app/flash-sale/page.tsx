"use client";
import Navbar from "@/components/Shared/Navbar";
import { TProduct } from "@/types/product";
import { getFormattedTime } from "@/utils/getFormattedTime";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FlashSalePage = () => {
  const [time, setTime] = useState(1 * 24 * 60 * 60 * 1000);
  const [allFlashProducts, setAllFlashProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://baby-care-store-backend-sand.vercel.app/products",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      const products = data?.data;
      const flashProducts = products.filter(
        (product: TProduct) => product.isFlashSale === true
      );
      setAllFlashProducts(flashProducts);
    };

    fetchProducts();
  }, []);

  // const res = await fetch("http://localhost:4000/products", {
  //   cache: "no-store",
  // });
  // const data = await res.json();
  // const products = data?.data;
  // const allFlashProducts = products.filter(
  //   (product: TProduct) => product.isFlashSale === true
  // );

  return (
    <div className="w-[90%] mx-auto ">
      <Navbar />
      <div className="w-[90%] mx-auto mb-8">
        <div className="flex items-center gap-x-12 py-4 mt-4 rounded-lg">
          <h2 className=" text-4xl font-semibold ">Flash Sale</h2>
          <h5>
            <span className="text-red-600 text-lg font-medium">Ends in</span> :{" "}
            <span className="text-slate-600 text-xl font-semibold">
              {getFormattedTime(time)}
            </span>
          </h5>
        </div>
        <div className="mt-4 mb-4 gap-y-2 text-start">
          <h5 className="text-secondary">
            Showing 1-{allFlashProducts.length} of 24 item(s)
          </h5>
          <p className="text-slate-400">
            <i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              perferendis veritatis impedit ut.
            </i>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
          {allFlashProducts.map((product: TProduct) => (
            <div
              key={product._id}
              className="card  shadow-xl hover:border border-gray-300"
            >
              <figure className="px-10 pt-10">
                <Image
                  src={product.image}
                  alt="Shoes"
                  width={350}
                  height={300}
                  className="rounded-xl px-6"
                />
              </figure>
              <div className="card-body items-start ">
                <h2 className="card-title ">{product.title}</h2>
                <p className="text-xl">
                  ${product.price}{" "}
                  <span className="line-through text-lg">
                    ${product.prevPrice}
                  </span>
                </p>
                <div className="card-actions">
                  <Link href={`/baby-accessories/${product._id}`}>
                    <button className="btn hover:btn-outline btn-warning">
                      View Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSalePage;
