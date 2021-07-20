import React from 'react'

import styles from './jobs.module.css'

const JobsCard = ({job}) => {
    // console.log("inside jobs card", job);
    return (
        <div className={styles.card}>
          <h3 className={styles.jobtitle}>{job.jobTitle}</h3>
          <h5 className={styles.cname}>{job.companyName}</h5>
          {/* <div className={styles.tags}>
            {job.skillsets.map(skill => <span>{skill}</span>)}
          </div> */}
          <p className={styles.details}>{job.shortDesc}</p>
        </div>
    );
}

export default JobsCard
