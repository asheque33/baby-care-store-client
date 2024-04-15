import { TCategory } from "@/types/category";
import { getAllCategories } from "@/utils/getAllCategories";
import Link from "next/link";

const CategoryList = async () => {
  const { data: categories } = await getAllCategories();
  return (
    <div className="border rounded-md px-5 py-5 text-center">
      {categories.map((category: TCategory) => (
        <div key={category._id} className="text-lg font-medium ">
          <Link
            className="btn btn-active btn-wide mb-2"
            href={`/baby-accessories?category=${category.title.toLocaleLowerCase()}`}
          >
            {category.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
