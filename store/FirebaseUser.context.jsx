import React, {createContext, useState, useEffect, Children} from "react";
import { getCurrUser } from "../services/firebase.services";
import { getUserInformation } from "../services/firestore.db";


export const FirebaseContext = createContext();

export const FireBaseProvider = ({children}) => {
    const [user, setuser] = useState([]);

    useEffect(() => {
        const data = async () => {
            const user = getCurrUser();
            const userDataBaseInformation = await getUserInformation(user.uid);
            setuser(userDataBaseInformation);
        }
        data();
    }, [])

    return (
        <FirebaseContext.Provider value={user}>
                {children}
        </FirebaseContext.Provider>
    )
}