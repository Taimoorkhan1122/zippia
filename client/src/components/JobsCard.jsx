import React from 'react'
import styles from './jobs.module.css'

const JobsCard = () => {
    return (
        <div className={styles.card}>
          <h3 className={styles.jobtitle}>Job Title</h3>
          <div className={styles.tags}>
            <span>tag 1</span>
            <span>tag 2</span>
            <span>tag 3</span>
          </div>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            reiciendis?
          </p>
        </div>
    );
}

export default JobsCard
