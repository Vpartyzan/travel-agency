import React from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

const OrderOptionDate = ({ currentValue, setOptionValue }) => (
  <div className={styles.component}>
    <DatePicker className={styles.input} selected={currentValue} onChange={setOptionValue} value={currentValue} placeholderText='Select date'/>
  </div>  
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};


export default OrderOptionDate;