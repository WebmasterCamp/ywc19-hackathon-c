import MainLayout from "@/layouts/MainLayout";
import Container from "@/components/Container";

import Link from "next/link";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "@/utils/firebase";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/Button";

const ProductPage = ({ query }: { query: string }) => {
  const db = getFirestore(app);
  const router = useRouter();

  const [product, setProduct] = useState<any>({});
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.slug) {
        const docRef = doc(db, "products", query);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setProduct(data);
      }
    };

    fetchData();
  }, []);

  const handleBuy = async () => {
    localStorage.setItem(
      "item",
      JSON.stringify({
        id: product.name,
        amount,
      })
    );

    router.push("/payment");
  };

  return (
    <MainLayout>
      <div className="relative">
        <div className="w-full aspect-[3/4] relative">
          <Image
            src={product.image}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>

        <Link href="/">
          <button className="absolute top-0 left-0 m-4 text-custom-red bg-white p-2 rounded-full shadow-custom-shadow">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        </Link>
      </div>

      <div className="fixed bottom-0 left-0 w-full rounded-t-3xl h-4/6 bg-white shadow-custom-shadow">
        <div className="p-6 h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>by standingup shop</p>
            </div>
            <p>{product.description}</p>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">ภาพรวมผลิตภัณฑ์</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-custom-light-gray rounded-3xl aspect-square"></div>
                <div className="bg-custom-light-gray rounded-3xl aspect-square"></div>
                <div className="bg-custom-light-gray rounded-3xl aspect-square"></div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row space-x-4">
                <h3 className="font-bold text-lg">สี</h3>
                <div className="flex flex-row space-x-2">
                  <button className="bg-gray-700 h-6 w-6 rounded-full"></button>
                  <button className="bg-custom-dark-orange h-6 w-6 rounded-full"></button>
                  <button className="bg-custom-green h-6 w-6 rounded-full"></button>
                </div>
              </div>

              <div className="bg-custom-light-gray font-bold flex flex-row justify-center items-center rounded-full space-x-2">
                <button className="py-2 px-4 rounded-l-full">-</button>
                <div>1</div>
                <button className="py-2 px-4 rounded-r-full">+</button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <hr />
            <div className="flex flex-row justify-between items-center">
              <div className="text-2xl font-bold">${product.price}</div>

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
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  query: string | string[] | undefined;
}> = async ({ query }) => {
  return { props: { query: query.slug } };
};

export default ProductPage;
