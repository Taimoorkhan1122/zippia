import React, { createContext, useReducer } from "react";
import { appReducer } from "./reducer";

const initialState = {jobs: []};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getPopularJobs = () => {
    dispatch({
      type: "ALL",
    });
  };

  const getPastWeekJobs = () => {
    dispatch({
      type: "PAST_WEEK",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        jobs: state,
        getPopularJobs,
        getPastWeekJobs,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
