import React from 'react';
import {shallow} from 'enzyme';

import DaysToSummer from './DaysToSummer';

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);

    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    const component = shallow(<DaysToSummer />);
    
    expect(component.exists('.title')).toEqual(true);
  });
});


const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }    
};

const checkDescription = ( date, expectDescription ) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T11:57:58.135Z`);
    
    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find('.title').text();
    expect(renderedTime).toEqual(expectDescription);
    
    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescription('2021-05-14', '38 days to summer!');
  checkDescription('2021-06-20', '1 day to summer!');
  checkDescription('2021-06-21', '');
  checkDescription('2021-07-21', '');
  checkDescription('2021-10-25', '239 days to summer!');
});
