import { TUsers } from "@/types/users";
import app from "@/utils/firebase";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

const db = getFirestore(app);

const getBills = async () => {
  const q = query(collection(db, "bills"));
  const querySnapshot = await getDocs(q);

  const data = await Promise.all(
    querySnapshot.docs.map(async (doc: any) => {
      const id = doc.id;
      const res = doc.data();
      const user = await getDoc(res.users);
      const userData: any = user.data();

      const products = await Promise.all(
        res.products.map(async (product: any) => {
          const productFetch = await getDoc(product);
          const productData: any = productFetch.data();
          return {
            id: productFetch.id,
            name: productData.name,
            description: productData.description,
            price: productData.price,
            image: productData.image,
            createdAt: productData.createdAt,
          };
        })
      );

      return {
        id,
        createdAt: res.createdAt,
        users: {
          id: user.id,
          username: userData.username,
          email: userData.email,
          role: userData.role,
          createdAt: userData.createdAt,
        },
        products: products,
      };
    })
  );

  return {
    status: true,
    data,
  };
};

export { getBills };
