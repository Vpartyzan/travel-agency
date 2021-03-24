import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import Pricing from '../../../data/pricing.json';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options, setOrderOption }) => (
  <Row>
    {Pricing.map( opt => (
      <Col key={opt.id} md={4}>
        <OrderOption {...opt} currentValue={options[opt.id]} setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;