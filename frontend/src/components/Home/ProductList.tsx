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

const ProductList = ({ button }: { button?: boolean }) => {
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
    <Container className="pt-12">
      <div className="flex flex-wrap gap-x-4">
        <button className="text-white bg-custom-orange ">All</button>
      </div>
    </Container>
  );
};

export default ProductList;
