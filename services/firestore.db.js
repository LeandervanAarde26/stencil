import { Timestamp, doc, setDoc, addDoc, collection, getDoc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../Utils/Firebase";
import { uploadImages } from "./firebase.storage";

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


export const getAllCompetitions = async () => {
  var comps  = [];
  try {
    const snapShot = await getDocs(query(
      collection(db, 'competitions')
    ));
    snapShot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      comps.push({ ...doc.data(), id: doc.id });
    });

      return comps;
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');

    return comps;
  }
}


export const getUserInformation = async (id) => {
  try {
    const docRef = await getDoc(doc(db, 'users', id));
    if(docRef.exists()){
      console.log(docRef.data())

      return docRef.data()
    } else {
      console.log('Document does not exist')
    }
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
}
