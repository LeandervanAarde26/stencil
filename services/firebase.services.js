import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Auth } from "../Utils/Firebase";
import { createNewUser } from "./firestore.db";

export const registerUser = async (username, email, password, role) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      Auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateAuthProfile(username);
    await createNewUser(username, email, role, user.uid);
    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode + ": " + errorMessage);
    console.log("ERROR" + errorMessage);
    return errorMessage;
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      Auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("user");
    return true;
  } catch (err) {
    const errCode = err.code;
    const errMsg = err.message;
    console.log("error", errCode, ":", errMsg);
    return errMsg;
  }
};

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

export const resetPassword = async (email) => {
  try {
    const reset = await sendPasswordResetEmail(Auth, email);
    return true;
  } catch (err) { // Fix variable name here
    const errCode = err.code;
    const errMsg = err.message;
    console.log("error", errCode, ":", errMsg);
    return errMsg;
  }
};
