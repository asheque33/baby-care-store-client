import Navbar from "@/components/Shared/Navbar";
import { TProduct } from "@/types/product";
import Image from "next/image";
import React from "react";
type TParams = {
  productId: string;
};
// export const generateStaticParams = async () => {
//   const res = await fetch(
//     "https://baby-care-store-backend-sand.vercel.app/products"
//   );
//   const { data: selectedProducts } = await res.json();
//   return selectedProducts.slice(0, 5).map((product: TProduct) => ({
//     productId: product._id,
//   }));
// };
const DynamicSingleProduct = async ({ params }: { params: TParams }) => {
  const res = await fetch(
    `https://baby-care-store-backend-sand.vercel.app/products/${params.productId}`,
    { cache: "no-store" }
  );
  const { data } = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <Navbar />
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-x-8">
        <div className="col-span-5 my-4">
          <Image src={data.image} width={600} height={400} alt="image" />
        </div>
        <div className="col-span-7 my-4">
          <div className="border-b border-gray-200  p-5">
            <h3 className="card-title text-2xl">{data.title}</h3>
            <div className="flex gap-6 my-2 text-xl font-medium">
              <p className="">${data.price}</p>
              <span className="border-l-2 border-gray-500"></span>
              <p>Ratings: {data.ratings.toFixed(2)}</p>
            </div>
            <p>
              <span className=" font-medium">Category:</span> {data.category}
            </p>
          </div>
          <p className="mt-3 mb-2 font-medium">{data.description}</p>
          <ul className="list-disc list-inside  my-4">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div className="col-span-12">
          <h6 className="border-b text-2xl font-semibold mb-4">Description</h6>
          <p>{data.description}</p>
          <ul className="list-disc list-inside  my-4">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DynamicSingleProduct;
