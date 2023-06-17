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
  where,
  documentId,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Utils/Firebase";
import { uploadImages } from "./firebase.storage";

export const createNewUser = async (
  username,
  email,
  role,
  id,
  profileImage
) => {
  try {
    console.log("----------- creating user..." + id);
    const docRef = await setDoc(doc(db, "users", id), {
      username,
      email,
      created: Timestamp.now(),
      role,
      profileImage,
      website: "",
      Instagram: "",
      contactDetails: "",
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
    const docRef = await addDoc(collection(db, `entries`), {
      description: entry.description,
      image: uri,
      name: entry.name,
      user: user,
      competition: entry.competition,
    });

    return true
  } catch (error) {
    console.log("====================================");
    console.log("Enter error:", error);
    console.log("====================================");
  }

  return false
};

export const updateProfile = async (values, id) => {
  const { username, email, website, Instagram, contactDetails } = values;

  try {
    const docRef = doc(db, "users", id);
    const updatedDocument = await updateDoc(docRef, {
      username,
      website,
      Instagram,
      contactDetails,
    });
    console.log("URI", uri);
    return true;
  } catch (error) {
    console.log("ERR", error);
    return false;
  }
};

export const updateProfileImage = async (profileImage, id) => {
  try {
    // const uri = await uploadImages(entry.image, `entries/${entry.name}`);
    const uri = await uploadImages(profileImage, `profileImages/${id}`);
    const docRef = doc(db, "users", id);
    const updatedDocument = await updateDoc(docRef, {
      profileImage: uri,
    });

    return true;
  } catch (error) {
    console.log("Network request failed:", error);
    // Handle the error or return false to indicate a failure
    return false;
  }
};

export const getAllEntries = async () => {
  const competitions = [];
  try {
    const snapShot = await getDocs(collection(db, "entries"));
    const userRef = collection(db, "users");
    await Promise.all(
      snapShot.docs.map(async (doc) => {
        const userDataRef = doc.data().user;
        const q = query(userRef, where(documentId(), "==", userDataRef));
        const userSnapshot = await getDocs(q);
        const user = userSnapshot.docs[0].data();
        competitions.push({ ...doc.data(), user, id: doc.id });
      })
    );
    // console.log( "ENTRIES" , competitions);
    return competitions;
  } catch (error) {
    console.log("GETERR", error);
    return competitions;
  }
};

export const deleteCurrentUser = async (id) => {
  try {
    const entriesRef = collection(db, "entries");
    const docRef = doc(db, "users", id);
    await deleteDoc(docRef);
    const entriesQuery = query(entriesRef, where("user", "==", id));
    const querySnapshot = await getDocs(entriesQuery);
    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    //It was the Promise.all all along, I need this to go through each document and resolve it.
    await Promise.all(deletePromises);
    console.log("====================================");
    console.log("DELETING DOC >>", id);
    console.log("====================================");
  } catch (error) {
    console.log("COLLECTION DELETE ERROR |", error);
  }
};