import Search from "./Search";
import React from "react";
import JobsContainer from "./JobsContainer";

import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Get the job you really want</h1>
        <p>Discover your options with your personalized career search</p>
      </div>
      <Search />
      <JobsContainer />
    </div>
  );
};

export default Homepage;
