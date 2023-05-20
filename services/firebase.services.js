import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Auth } from "../Utils/Firebase";

export const registerUser = ( email, password, displayname,) => {
  createUserWithEmailAndPassword(Auth, email, password)
    .then((userCredential) => {
      const newUser = userCredential.user;
      console.log("new user", newUser);
         
    })
    .catch((err) => {
      const errCode = err.code;
      const errMsg = err.message;
      console.log("error", errCode, ":", errMsg);
    });
};

export const loginUser = (email, password) => {
    signInWithEmailAndPassword(Auth, email, password)
    .then((userCredential) =>{
        const user = userCredential.user;
        const userName = userCredential.user.updateProfile({
            displayName: displayname
        })
        // console.log(userName)
    })
    .catch(err =>{
        const errCode = err.code;
        const errMsg = err.messagel
        console.log("error", errCode, ":", errMsg);
    })
}
