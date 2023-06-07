import {
  Timestamp,
  doc,
  setDoc,
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Utils/Firebase";
import { uploadImages } from "./firebase.storage";

export const createNewUser = async (username, email, role, id, profileImage) => {
  try {
    console.log("----------- creating user..." + id);
    const docRef = await setDoc(doc(db, "users", id), {
      username,
      email,
      created: Timestamp.now(),
      role,
      profileImage
    });
  } catch (error) {
    console.log(`fault ${error}`);
  }
};

export const getAllCompetitions = async () => {
  var comps = [];
  try {
    const snapShot = await getDocs(query(collection(db, "competitions")));
    snapShot.forEach((doc) => {
      // console.log(doc.id, "=>", doc.data());
      comps.push({ ...doc.data(), id: doc.id });
    });

    return comps;
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("===================================");

    return comps;
  }
};

export const getUserInformation = async (id) => {
  try {
    const docRef = await getDoc(doc(db, "users", id));
    if (docRef.exists()) {
      console.log(docRef.data());

      return docRef.data();
    } else {
      console.log("Document does not exist");
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("===================================");
  }
};

export const getCategories = async () => {
  var categories = [];
  try {
    const snapShot = await getDocs(query(collection(db, "categories")));
    snapShot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      categories.push({ ...doc.data(), id: doc.id });
    });

    return categories;
  } catch (error) {
    console.log("====================================");
    console.log("Categories error:", error);
    console.log("====================================");

    return categories;
  }
};

export const EnterCompetition = async (entry, user) => {
  try {
    console.log(entry);
    const uri = await uploadImages(entry.image, `entries/${entry.name}`);
    const docRef = await addDoc(
      collection(db, `entries`),
      {
        description: entry.description,
        image: uri,
        name: entry.name,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage,
        competition: entry.competition
      }
    );
  } catch (error) {
    console.log("====================================");
    console.log("Enter error:", error);
    console.log("====================================");
  }
};

export const getAllEntries = async () =>{

  var entries = [];
  try {
    const snapShot = await getDocs(query(collection(db, "entries")));
    snapShot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      entries.push({ ...doc.data(), id: doc.id });
    });

    return entries;
  } catch (error) {
    console.log("====================================");
    console.log("Categories error:", error);
    console.log("====================================");

    return entries;
  }
}
