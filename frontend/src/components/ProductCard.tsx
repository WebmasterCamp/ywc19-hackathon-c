import Image from "next/image";
import Button from "./Button";

import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProductCard = ({
  id,
  title,
  description,
  price,
  image,
}: {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}) => {
  return (
    <Link href={`/product/${id}`} className="bg-white shadow-custom-shadow rounded-3xl py-4 px-4 flex flex-row gap-4">
      <div className="relative">
        <div className="relative w-[140px] aspect-square rounded-3xl bg-custom-light-gray">
          <Image src={image} alt="" fill={true} className="rounded-3xl" />
        </div>
        <button className="absolute top-0 right-0 rounded-full z-10 text-custom-red bg-white p-1 m-2 shadow-custom-search">
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-2">
        <div>
          <h2 className="font-bold text-lg font-ibm-plex-sans">{title}</h2>
          <p className="text-sm">{description.slice(0, 70)}...</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">${price}</div>
          <div className="flex flex-row gap-4">
            <Link href={`/product/${id}`}>
              <Button
                text="ตระกร้า"
                color="secondary"
                size="xs"
                icon={<ShoppingBagIcon className="w-4 h-4" />}
              />
            </Link>
            <Link href={`/product/${id}`}>
              <Button
                text="ซื้อเลย"
                size="xs"
                color="primary"
                icon={<ShoppingBagIcon className="w-4 h-4" />}
              />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
