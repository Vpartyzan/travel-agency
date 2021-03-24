import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => (  
  <div className={styles.component}>
    { required ? '' : (
      <div 
        key='null' 
        className={currentValue == '' ? `${styles.icon} ${styles.iconActive}` : styles.icon}
        onClick={ () => setOptionValue('') }
      >
        <Icon name='times-circle' />None
      </div> )}
    
    { values.map( value => (
      <div 
        className={currentValue == value.id ? `${styles.icon} ${styles.iconActive}` : styles.icon} 
        key={value.id}
        onClick={ () => setOptionValue(value.id) }
      >
        <Icon name={value.icon} />{value.name} ({formatPrice(value.price)})
      </div>  
    )) }
  </div>
);

OrderOptionIcons.propTypes = {
  currentValue: PropTypes.string,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};

export default OrderOptionIcons;