import { storage } from "../Utils/Firebase";

export const uploadImages = async (filesUri, refName) => {
    try {
        console.log("Busy Uploading...");
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