import React from 'react';
import styles from './DaysToSummer.scss';

const getDaysToSummer = () => {
  const currentDate = new Date();
  const lastSummerDay = new Date(`${currentDate.getUTCFullYear()}-09-23`);
  const firstSummerDay = (currentDate.getUTCMonth() > lastSummerDay.getUTCMonth()) 
    ? new Date(`${currentDate.getUTCFullYear() + 1}-06-21`)
    : new Date(`${currentDate.getUTCFullYear()}-06-21`);  

  return ( currentDate > firstSummerDay && currentDate < lastSummerDay) ? null 
    : Math.ceil(Math.abs(firstSummerDay.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));   
};

const DaysToSummer = () => {
  const days = getDaysToSummer();

  return (
    <div className={styles.component}>
      <h3 className={styles.title}>        
        { (days == null) ? null : (days == 1) ? days + ' day to summer!' : days + ' days to summer!' } 
      </h3>
    </div>
  );
};

export default DaysToSummer;