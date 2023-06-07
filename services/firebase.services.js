import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Auth } from "../Utils/Firebase";
import { addAllProjs, createNewUser } from "./firestore.db";

export const registerUser = async (username, email, password, role) => {

  const defaultImageLink = 'https://firebasestorage.googleapis.com/v0/b/stencildb-ddd4f.appspot.com/o/entries%2FNeoTrad%20bee?alt=media&token=2c923402-f45a-4667-b23e-e06612815179';
  try {
    const userCredential = await createUserWithEmailAndPassword(
      Auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateAuthProfile(username, 'https://firebasestorage.googleapis.com/v0/b/stencildb-ddd4f.appspot.com/o/Defaults%2FprofileImage.jpg?alt=media&token=7c2fadae-e0b7-484b-a32f-3be7ee9c65a8&_gl=1*k39ilv*_ga*MTg3MzQ4NjU1LjE2ODI4NDIwMTg.*_ga_CW55HF8NVT*MTY4NTc0OTE3MC40NC4xLjE2ODU3NDkzOTQuMC4wLjA.');
    await createNewUser(username, email, role, user.uid, defaultImageLink);
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

export const updateAuthProfile = async (username, photoURL) => {
  return new Promise((resolve, reject) => {
    updateProfile(Auth.currentUser, {
      displayName: username,
      photoURL: photoURL,
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

export const signOut = () => {
  Auth.signOut()
}



export const getCurrUser = () => {
  return Auth.currentUser;
};


