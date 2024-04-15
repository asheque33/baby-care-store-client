import { TProduct } from "@/types/product";
import { getAllProducts } from "@/utils/getAllProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProducts = async () => {

  const { data: products } = await getAllProducts();
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-4">
      {products.map((product: TProduct) => (
        <div
          key={product._id}
          className="card  shadow-xl hover:border border-gray-300"
        >
          <figure className="px-10 pt-6">
            <Image
              src={product.image}
              alt="Shoes"
              width={500}
              height={400}
              className="rounded-xl px-6"
            />
          </figure>
          <div className="card-body items-start ">
            <h2 className="card-title text-lg font-medium">
              {product.title.length > 25
                ? product.title.slice(0, 25) + "..."
                : product.title}
            </h2>
            <p className="text-xl">
              ${product.price}{" "}
              <span className="line-through text-lg">${product.prevPrice}</span>
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
  );
};

export default AllProducts;
