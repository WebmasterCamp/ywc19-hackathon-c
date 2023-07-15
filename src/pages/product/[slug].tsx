import MainLayout from "@/layouts/MainLayout";
import Container from "@/components/Container";

import Link from "next/link";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "@/utils/firebase";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

const ProductPage = ({ query }: { query: string }) => {
  const db = getFirestore(app);
  const router = useRouter();

  const [product, setProduct] = useState<any>({});

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

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <MainLayout>
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="relative w-full aspect-video">
              <Image
                src={product.image}
                fill={true}
                className="object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-2xl">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </Container>
      <Container className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="amount"
              id="amount"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="0"
              defaultValue={0}
            />
          </div>
        </div>
        <div>
          <Link href="/payment">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Buy !
            </button>
          </Link>
        </div>
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  query: string | string[] | undefined;
}> = async ({ query }) => {
  return { props: { query: query.slug } };
};

export default ProductPage;
