import { createContext, useState, useEffect } from "react";
import { finalResetCompetitions, getAllCompetitions, getCategoryWinners, resetCompetitions, resetEntries } from "../services/firestore.db";

export const FireBaseCompetitionContext = createContext();

export const FireBaseCompetitionProvider = ({ children }) => {
  const [competitions, setCompetitions] = useState();
  const [userUpdate, setUserUpdate] = useState(false);


  useEffect(() => {
    getComps();
  }, []);

  const getComps = async () => {
    const allCompetitions = await getAllCompetitions();
    setCompetitions(allCompetitions);
    
    const reset = await finalResetCompetitions();
    console.log(reset);
    
    if (reset) {
      const userUpdate = await getCategoryWinners();
      const deleteDocuments = resetEntries()
      console.log(userUpdate);
    }
  };
  
  return (
    <FireBaseCompetitionContext.Provider value={competitions}>
        {children}
    </FireBaseCompetitionContext.Provider>
  )
};
