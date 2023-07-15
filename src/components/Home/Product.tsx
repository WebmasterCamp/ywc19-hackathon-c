import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import app from "@/utils/firebase";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const Product = ({ button }: { button?: boolean }) => {
  const db = getFirestore(app);

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const res = doc.data();
        return {
          id,
          ...res,
        };
      });
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <Container className="py-16">
      {products.map((product: any) => (
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
            {button && (
              <div>
                <Link href={`/product/${product.id}`}>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Detail
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Product;
