import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { Auth } from "../Utils/Firebase";
import { createNewUser } from "./firestore.db";

export const registerUser = async (username,email, password, role) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
        const user = userCredential.user;
        await updateAuthProfile(username);
        await createNewUser(username, email, role, user.uid);
        return true
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode + ": " + errorMessage);
        console.log("ERROR" + errorMessage)
        return errorMessage
      }
  };

export const loginUser = (email, password) => {
    signInWithEmailAndPassword(Auth, email, password)
    .then((userCredential) =>{
        const user = userCredential.user;
    })
    .catch(err =>{
        const errCode = err.code;
        const errMsg = err.messagel
        console.log("error", errCode, ":", errMsg);
    })
}

  const updateAuthProfile = async (username) => {
    return new Promise((resolve, reject) => {
      updateProfile(Auth.currentUser, {
        displayName: username,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
