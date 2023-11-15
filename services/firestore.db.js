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
  FieldValue,
  increment,
  arrayUnion,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../Utils/Firebase";
import { uploadImages } from "./firebase.storage";
import { getCurrUser } from "./firebase.services";

const convertTimeToSeconds = (days, hours) => {
  const today = new Date();
  const todayD = new Date(today);
  todayD.setDate(today.getDate() + days);
  todayD.setHours(hours, 0, 0, 0);
  const convertedValue = todayD.getTime() / 1000;
  return convertedValue;
};

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
      competitionsWon: 0
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
    const enteredUser = await getCurrUser()
    const uri = await uploadImages(entry.image, `entries/${entry.name}`);
    const docRef = await addDoc(collection(db, "entries"), {
      description: entry.description,
      image: uri,
      name: entry.name,
      user: enteredUser.uid,
      competition: entry.competition,
      votes: 0,
      voters: [],
      winner: false,
    });

    const querySnapshot = await getDocs(
      query(
        collection(db, "competitions"),
        where("competitionName", "==", entry.competition)
      )
    );
    querySnapshot.forEach((document) => {
      const currentCompetitors = document.data().contestants;
      const competitionDocRef = doc(db, "competitions", document.id);
      updateDoc(competitionDocRef, { contestants: currentCompetitors + 1 });
    });

    return true;
    // }
  } catch (error) {
    console.log("====================================");
    console.log("Enter error:", error);
    console.log("====================================");
    return false;
  }
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

export const voteOnCompetition = async (userId, id, direction) => {
  try {
    const docRef = doc(db, "entries", id);
    const updateVotes = await updateDoc(docRef, {
      voters: arrayUnion(userId),
      votes: direction === "Left" ? increment(-1) : increment(1),
    });

    return true;
  } catch (error) {
    console.log(error);
  }
};

export const getCompetitionLeaders = async () => {
  const competitions = [];
  try {
    const snapShot = await getDocs(
      query(collection(db, "entries"), orderBy("votes", "desc"), limit(10))
    );
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
    return competitions;
  } catch (error) {
    console.log("GETERR", error);
    return competitions;
  }
};

export const getCategoryWinners = async () => {
  try {
    const snapshot = await getDocs(
      query(
        collection(db, "entries"),
        orderBy("competition", "desc"),
        limit(10)
      )
    );
    const userRef = collection(db, "users");
    const categoryWinners = {};
    snapshot.docs.forEach((doc) => {
      const competition = doc.data().competition;
      const votes = doc.data().votes;
      const user = doc.data().user;

      if (
        !categoryWinners[competition] ||
        votes > categoryWinners[competition].votes
      ) {
        categoryWinners[competition] = { user, votes, competition };
      }
    });
    const winnersArray = Object.values(categoryWinners);

    winnersArray.forEach(async (item) => {
      const userSnapshot = await getDocs(
        query(userRef, where("__name__", "==", item.user))
      );
      const userDocument = userSnapshot.docs[0];

      if (userSnapshot.docs.length > 0) {
        await updateDoc(userDocument.ref, { competitionsWon: increment(1) });
      }
    });
    return winnersArray;
  } catch (error) {
    console.log(error);
  }
};

export const finalResetCompetitions = async () => {
  try {
    let reset = false;
    const randomNumber = Math.floor(Math.random() * 8) + 3;
    const randomReset = randomNumber + 4;
    const todaysDate = new Date();
    const currentHour = todaysDate.getHours();
    const finalVal = convertTimeToSeconds(0, currentHour);
    const finalNewDate = convertTimeToSeconds(randomNumber, 15);
    const finalReset = convertTimeToSeconds(randomReset, 15);
    const hourRangeStart =
      new Date(
        todaysDate.getFullYear(),
        todaysDate.getMonth(),
        todaysDate.getDate(),
        currentHour,
        0,
        0,
        0
      ).getTime() / 1000;
    const hourRangeEnd =
      new Date(
        todaysDate.getFullYear(),
        todaysDate.getMonth(),
        todaysDate.getDate(),
        currentHour + 1,
        0,
        0,
        0
      ).getTime() / 1000;

    const snapshot = await getDocs(
      query(collection(db, "competitions"), orderBy("resetDate", "desc"))
    );

    const updatePromises = snapshot.docs.map((document) => {
      console.log("DOC", document.data());
      if (
        document.data().resetDate == finalVal ||
        (document.data().resetDate > hourRangeStart &&
          document.data().resetDate < hourRangeEnd)
      ) {
        const docRef = doc(db, "competitions", document.data().id);
        return Promise.resolve(
          updateDoc(docRef, {
            remainingTime: finalNewDate,
            resetDate: finalReset,
            contestants: 0,
          })
        );
      }
    });
    await Promise.all(updatePromises);

    reset = updatePromises.some((promise) => promise !== undefined);
    console.log("Heyrr")
    return reset;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const resetEntries = async () => {
  const snapShot = await getDocs(collection(db, "entries"));

  snapShot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};
