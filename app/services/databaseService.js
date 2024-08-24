import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const createData = async (collectionName, data) => {
  await addDoc(collection(db, collectionName), data);
};

