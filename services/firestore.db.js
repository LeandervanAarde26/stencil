import { Timestamp, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from "../Utils/Firebase";

export const createNewUser = async (username, email, role, id) => {
  try {
    console.log("----------- creating user..." + id);
    const docRef = await setDoc(doc(db, "users", id), {
      username,
      email,
      created: Timestamp.now(),
      role
    });
  } catch (error) {
    console.log(`fault ${error}`);
  }
};


