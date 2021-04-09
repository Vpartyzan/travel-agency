import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import Pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';

import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import { getCountdownTime } from '../../../utils/getCountdownTime';
import { promoPrice } from '../../../utils/promoPrice';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripData) => {
  const totalCost = ( getCountdownTime() > 23*60*60 && getCountdownTime() <= 24*60*60 ) 
    ? formatPrice(promoPrice(calculateTotal(tripCost, options), 20)) 
    : formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId: tripData.id,
    tripName: tripData.name,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ tripCost, options, setOrderOption, tripData }) => (
  <Row>
    {Pricing.map( opt => (
      <Col key={opt.id} md={4}>
        <OrderOption {...opt} currentValue={options[opt.id]} setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
    <Button onClick={() => (options.contact == '' && options.name == '') ? alert('Name and contact info should not be empty.') : sendOrder(options, tripCost, tripData) }>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripData: PropTypes.object,
};

export default OrderForm;