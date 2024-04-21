import Link from "next/link";
import { ReactNode } from "react";

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
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
        <div className="bg-slate-300 col-span-2 h-screen sticky top-0 left-0">
          <ul className="text-center mt-4">
            <li>
              <Link
                href="/dashboard/all-products"
                className="btn text-md btn-active  px-10"
              >
                All Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 ">{children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
