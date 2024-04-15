import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const TopRatedProducts = async () => {
  const res = await fetch(
    "https://baby-care-store-backend-sand.vercel.app/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: products } = await res.json();
  //   const products = data?.data.filter(
  //     (product: TProduct) => product.isFlashSale === true
  //   );
  const topRatedProducts: TProduct[] = products
    .sort((a: TProduct, b: TProduct) => b.ratings - a.ratings)
    .slice(0, 8);

  return (
    <div>
      <div className="flex justify-between items-center px-8 py-4 mt-8 mb-4">
        <h2 className="  font-semibold text-3xl">Top Rated Products</h2>
        <Link href="/baby-accessories">
          <button className="btn btn-neutral text-white btn-square rounded-full w-full px-8 py-2">
            View All
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-6 ">
        {topRatedProducts?.map((product: TProduct) => (
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
                {/*<span className="line-through text-lg">${prevPrice}</span> */}
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
  );
};

export default TopRatedProducts;
