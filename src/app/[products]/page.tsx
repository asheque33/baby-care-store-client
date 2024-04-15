import Navbar from "@/components/Shared/Navbar";
import AllProducts from "@/components/UI/AllProducts";
import CategoryList from "@/components/UI/CategoryList";
import { TProduct } from "@/types/product";
import { getCategoryNews } from "@/utils/getCategoryNews";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <div className="w-[90%] mx-auto">
      <Navbar />
      <div className="w-[90%] mx-auto my-8 grid grid-cols-12">
        <div className="col-span-3">
          <div className="flex items-center gap-8 shadow-sm">
            <h4 className="border-l-4 h-10 text-slate-500"></h4>
            <h1 className="text-2xl font-semibold">Categories</h1>
          </div>
          <CategoryList />
        </div>

        <div className="col-span-9 ps-4">
          <div className=" py-4 rounded-lg">
            <h2 className=" text-4xl font-semibold ">
              Our Collection Of Products
            </h2>
          </div>
          <div className="mt-4 mb-4 gap-y-2 text-start">
            <h5 className="text-secondary">
              Showing 1-{searchParams.category ? data.length : 18} of 24 item(s)
            </h5>
            <p className="text-slate-400">
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                perferendis veritatis impedit ut.
              </i>
            </p>
          </div>
          {!searchParams.category ? (
            <AllProducts />
          ) : (
            <div className="grid grid-cols-4 gap-x-4 gap-y-4">
              {data.map((product: TProduct) => (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
