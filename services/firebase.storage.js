import { storage } from "../Utils/Firebase";
import { getDownloadURL,ref, uploadBytes } from "firebase/storage";

export const uploadImages = async (filesUri, refName) => {
    try {
        console.log("Busy Uploading...");
        console.log(filesUri, refName)
        const response = await fetch(filesUri);
        if (!response.ok) {
          throw new Error("Network request failed");
        }
        
        const blob = await response.blob();
        const uploadRef = ref(storage, refName);
        const snapshot = await uploadBytes(uploadRef, blob);
        blob.close();
        
        return getDownloadURL(uploadRef);
      } catch (error) {
        console.log(error);
        throw error;
      }
}