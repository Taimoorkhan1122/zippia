import React from "react";

import styles from "./jobs.module.css";
import JobsCard from "./JobsCard";

const JobsContainer = () => {
  return (
    <div className={styles.JobsContainer}>
      <h4>Popular Jobs</h4>
      <div className={styles.cardsContainer}>

      <JobsCard />
      </div>
    </div>
  );
};

export default JobsContainer;
