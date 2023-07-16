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
import Category from "../Category";
import ProductCard from "../ProductCard";

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
    <Container className="pt-12 space-y-6 pb-16">
      <div className="flex flex-wrap gap-x-2">
        <Category active={true}>All</Category>
        <Category active={false}>Northern</Category>
        <Category active={false}>Southern</Category>
      </div>

      <ProductCard
        title="ชื่อผลิตภัณฑ์"
        description="รายละเอียดผลิตภัณฑ์กำลงรอคอนเท้นต์อยู่จะบู้จะบี้มารากู"
        price={567}
        image={"/rect-36.png"}
      />
      <ProductCard
        title="ชื่อผลิตภัณฑ์"
        description="รายละเอียดผลิตภัณฑ์กำลงรอคอนเท้นต์อยู่จะบู้จะบี้มารากู"
        price={567}
        image={"/rect-36.png"}
      />
      <ProductCard
        title="ชื่อผลิตภัณฑ์"
        description="รายละเอียดผลิตภัณฑ์กำลงรอคอนเท้นต์อยู่จะบู้จะบี้มารากู"
        price={567}
        image={"/rect-36.png"}
      />
    </Container>
  );
};

export default ProductList;
