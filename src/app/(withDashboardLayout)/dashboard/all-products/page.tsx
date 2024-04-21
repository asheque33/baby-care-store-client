import { TProduct } from "@/types/product";
import Image from "next/image";

const AllProductsDashboard = async () => {
  const res = await fetch(
    "https://baby-care-store-backend-sand.vercel.app/products",
    {
      cache: "no-store",
    }
  );
  const { data: products } = await res.json();

  return (
    <div>
      <h3 className="font-semibold text-4xl ms-4 my-3">All Products</h3>
      <div className="overflow-x-auto z-[1] border border-gray-300 mx-4">
        <table className="table">
          {/* head */}
          <thead className="bg-[#A6A6A6] rounded-md">
            <tr>
              <th>SL</th>
              <th className="flex-[2] text-center">Items</th>
              <th>Category</th>
              <th className="text-center">Product ID</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product: TProduct, index: number) => (
              <tr key={product._id} className="hover border-b-2">
                <th>{index + 1}</th>
                <td className="flex gap-x-2 items-center flex-[2]">
                  <p className="border border-slate-300 p-4">
                    {
                      <Image
                        src={product.image}
                        alt="image"
                        width={60}
                        height={60}
                      />
                    }
                  </p>
                  <p className="font-semibold">
                    {product.title.length > 20
                      ? product.title.slice(0, 20) + "..."
                      : product.title}
                  </p>
                </td>
                <td className="font-medium">{product.category}</td>
                <td>{product._id}</td>
                <td className="font-semibold">${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductsDashboard;
