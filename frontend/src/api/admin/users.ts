import app from "@/utils/firebase";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

const db = getFirestore(app);

const getUsers = async () => {
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc: any) => {
    const id = doc.id;
    const res = doc.data();

    return {
      id,
      username: res.username,
      email: res.email,
      role: res.role,
      createdAt: res.createdAt,
    };
  });

  return {
    status: true,
    data,
  };
};

export { getUsers };
