import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import { getCountdownTime } from '../../../utils/getCountdownTime';
import { promoPrice } from '../../../utils/promoPrice';

const OrderSummary = ({ tripCost, options }) => {
  
  if ( getCountdownTime() > 23*60*60 && getCountdownTime() <= 24*60*60 ) {
    return (
      <div className={styles.component}>
        <h2>
          Happy Hour price: <strong>{formatPrice(promoPrice(calculateTotal(tripCost, options), 20))}</strong>
        </h2>
        <h3>
          Standart price: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
        </h3>
      </div>
    );    
  } else {    
    return (
      <h2 className={styles.component}>
        Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
      </h2>
    );
  }   
  
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;