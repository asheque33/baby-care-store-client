import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const FlashSaleCard = ({ flashProduct }: { flashProduct: TProduct }) => {
  const { _id, image, title, prevPrice, price } = flashProduct;
  return (
    <div className="card  shadow-xl hover:border border-gray-300">
      <figure className="px-10 pt-10">
        <Image
          src={image}
          alt="Shoes"
          width={350}
          height={300}
          className="rounded-xl px-6"
        />
      </figure>
      <div className="card-body items-start ">
        <h2 className="card-title ">{title}</h2>
        <p className="text-xl">
          ${price} <span className="line-through text-lg">${prevPrice}</span>
        </p>
        <div className="card-actions">
          <Link href={`/baby-accessories/${_id}`}>
            <button className="btn hover:btn-outline btn-warning">
              View Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
