import FlashSaleCard from "@/components/FlashSaleCard";
import { TProduct } from "@/types/product";
import Link from "next/link";

const FlashSaleProducts = async () => {
  const res = await fetch(
    "https://baby-care-store-backend-sand.vercel.app/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();
  const products = data?.data.filter(
    (product: TProduct) => product.isFlashSale === true
  );
  const flashSaleProducts: TProduct[] = products
    .sort((a: TProduct, b: TProduct) => b._id.localeCompare(a._id))
    .slice(0, 4);

  return (
    <div>
      <div className="flex justify-between items-center px-8 py-4 mt-8 mb-4">
        <h2 className="  font-semibold text-3xl">Flash Sale</h2>
        <Link href="/flash-sale">
          <button className="btn btn-neutral text-white btn-square rounded-full w-full px-8 py-2">
            View All
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-x-8 my-8">
        {flashSaleProducts?.map((flashProduct: TProduct) => (
          <FlashSaleCard key={flashProduct._id} flashProduct={flashProduct} />
        ))}
      </div>
    </div>
  );
};

export default FlashSaleProducts;
