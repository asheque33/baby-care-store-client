import { TProduct } from "@/types/product";
import { getAllProducts } from "@/utils/getAllProducts";
import Image from "next/image";
import Link from "next/link";

const DashBoardLayout = async () => {
  const { data: products } = await getAllProducts();

  return (
    <div className="w-[90%] mx-auto">
      <nav className="w-[90%] mx-auto">
        <ul className="flex justify-around items-center bg-slate-400 rounded-t-md py-1 gap-x-96">
          <Link href="/" className="text-white text-xl btn btn-ghost">
            BaBCare
          </Link>
          <div className="flex justify-around gap-x-8 text-white">
            <div className="flex flex-col gap-y-1 ">
              <p>Belal Assad</p>
              <p className="text-end">Admin</p>
            </div>
            <div className="avatar py-1">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </ul>
      </nav>

      <div className="grid grid-cols-12 w-[90%] mx-auto ">
        <div className="bg-slate-400 col-span-2 h-screen sticky top-0 left-0">
          <ul className="text-center mt-4">
            <li>
              <Link
                href="/dashboard/all-products"
                className="btn text-md btn-ghost px-8"
              >
                All Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 ">
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
      </div>
    </div>
  );
};

export default DashBoardLayout;
