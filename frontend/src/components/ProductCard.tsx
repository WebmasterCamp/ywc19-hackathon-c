import Image from "next/image";
import Button from "./Button";

import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";

const ProductCard = ({
  title,
  description,
  price,
  image,
}: {
  title: string;
  description: string;
  price: number;
  image: string;
}) => {
  return (
    <div className="bg-white shadow-custom-shadow rounded-3xl py-4 px-4 flex flex-row gap-4">
      <div className="relative">
        <div className="relative w-[140px] aspect-square rounded-3xl bg-custom-light-gray">
          <Image src={image} alt="" fill={true} />
        </div>
        <button className="absolute top-0 right-0 rounded-full z-10 text-custom-red bg-white p-1 m-2 shadow-custom-search">
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-2">
        <div>
          <h2 className="font-bold text-lg font-ibm-plex-sans">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">${price}</div>
          <div className="flex flex-row gap-4">
            <Button
              text="ตระกร้า"
              color="secondary"
              size="xs"
              icon={<ShoppingBagIcon className="w-4 h-4" />}
            />
            <Button
              text="ซื้อเลย"
              size="xs"
              color="primary"
              icon={<ShoppingBagIcon className="w-4 h-4" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
