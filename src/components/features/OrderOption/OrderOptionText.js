import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({ currentValue, setOptionValue }) => (
  <div className={styles.component}>
    <input type='text' className={styles.input} value={currentValue} onChange={ event => setOptionValue(event.currentTarget.value)}/>
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;