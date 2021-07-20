import React, {useContext, useEffect} from "react";
import { GlobalContext } from "../context/GlobalProvider";

import styles from "./jobs.module.css";
import JobsCard from "./JobsCard";
import Search from './Search';

const JobsContainer = () => {
  
  const {jobs: {jobs:data}, getPopularJobs } = useContext(GlobalContext);
  console.log(data);
  useEffect(( )=> {
    getPopularJobs();
  }, [])

  if(!data || data.length === 0) return <div>Loading...</div>
  return (
    <div className={styles.JobsContainer}>
      <h4>Popular Jobs</h4>
      <Search />
      <div className={styles.cardsContainer}>
        {data.map((job, index) =>   <JobsCard key={index +"_0"+index} job={job} />)}
      </div>
    </div>
  );
};

export default JobsContainer;
