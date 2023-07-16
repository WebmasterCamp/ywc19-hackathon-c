import app from "@/utils/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

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
      color: res.color,
      createdAt: res.createdAt,
    };
  });

  return {
    status: true,
    data,
  };
};

const getProduct = async (query: string) => {
  const docRef = doc(db, "products", query);
  const docSnap = await getDoc(docRef);
  const data: any = docSnap.data();

  return {
    status: true,
    data: {
      id: docSnap.id,
      name: data.name,
      description: data.description,
      image: data.image,
      price: data.price,
      color: data.color,
      createdAt: data.createdAt,
    },
  };
};

export { getProducts, getProduct };
