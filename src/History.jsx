import React from 'react';
import styles from './History.module.css';

const History = () => {
  return (
    <div className={styles.historyContainer} id='history'>
    
      <div className={styles.card}>
      
        <div className={styles.img}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.content}>
        
          <h2>Doraemon</h2>
          <h1>History</h1>
          <p>Doraemon is a male robotic earless cat that travels back in time from the 22nd century to aid a preteen boy named Nobita. An official birth certificate for the character gives him a birth date of 3 September 2112 and lists his city of residency as Kawasaki, Kanagawa, the city where the manga was created.</p>
        </div>
      </div>
    </div>
  );
};

export default History;
