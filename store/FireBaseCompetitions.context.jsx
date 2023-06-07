import { createContext, useState, useEffect } from "react";
import { getAllCompetitions } from "../services/firestore.db";

export const FireBaseCompetitionContext = createContext();

export const FireBaseCompetitionProvider = ({ children }) => {
  const [competitions, setCompetitions] = useState();

  useEffect(() => {
    const getComps = async () => {
      const allCompetitions = await getAllCompetitions();
      setCompetitions(allCompetitions);
    };
    getComps();
  }, []);

  return (
    <FireBaseCompetitionContext.Provider value={competitions}>
        {children}
    </FireBaseCompetitionContext.Provider>
  )
};
