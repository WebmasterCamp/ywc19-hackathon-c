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
import { getProducts } from "@/api/admin/products";
import { TProducts, TProductsResponse } from "@/types/products";

const ProductList = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data }: TProductsResponse = await getProducts();
      setProducts(data);
    };

    fetchProducts();
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

      {products.length != 0 &&
        products.map((product: TProducts, index: number) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
    </Container>
  );
};

export default ProductList;
