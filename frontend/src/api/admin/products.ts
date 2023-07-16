import app from "@/utils/firebase";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

const db = getFirestore(app);

const getProducts = async () => {
  const q = query(collection(db, "products"));
  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc: any) => {
    const id = doc.id;
    const res = doc.data();

    return {
      id,
      name: res.name,
      description: res.description,
      image: res.image,
      price: res.price,
      createdAt: res.createdAt,
    };
  });

  return {
    status: true,
    data,
  };
};

export { getProducts };
