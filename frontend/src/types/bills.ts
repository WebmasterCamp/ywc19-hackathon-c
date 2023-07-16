import FieldValue from "firebase/firestore";
import { TUsers } from "./users";

type TBills = {
  id: string;
  createdAt: FieldValue.Timestamp;
  users: TUsers;
  products: FieldValue.DocumentReference[];
};

type TBillsResponse = {
  status: boolean;
  data: TBills[];
};

export type { TBills, TBillsResponse };
