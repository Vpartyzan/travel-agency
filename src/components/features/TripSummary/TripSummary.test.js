import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image' alt='name' name='name' cost='cost' days={1} tags={['1', '2']} />);
    expect(component).toBeTruthy();
        
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should generate correct linkURL', () => {
    const expectedLinkURL = `/trip/abs`; 
    const component = shallow(<TripSummary id='abs' image='image' alt='name' name='name' cost='cost' days={1} tags={['1', '2']} />);
        
    expect(component.find('.link').prop('to')).toEqual(expectedLinkURL);
  });

  it('should render correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary id='abs' image={expectedSrc} alt={expectedAlt} name='name' cost='cost' days={1} tags={['1', '2']} />);
       
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost, days', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 2;

    const component = shallow(<TripSummary id='abc' image='image' alt='name' name={expectedName} cost={expectedCost} days={expectedDays} tags={['1', '2']} />);
       
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').childAt(1).text()).toEqual(`from ${expectedCost}`);        
    expect(component.find('.details').childAt(0).text()).toEqual(`${expectedDays} days`);
  });

  it('should render correct tags', ()=>{
    const expectedTags = ['1','2','3'];
    const component = shallow(<TripSummary id='test' image='image' name='name' cost='cost' days={1} tags={expectedTags} />);
          
    for (let tag in expectedTags) {    
      expect(component.find('.tag').at(tag).text()).toEqual(expectedTags[tag]);
    }
  });

  it('should throw error if tags are FALSE', ()=>{
    const component = shallow(<TripSummary id='test' image='image' name='name' cost='cost' days={1} tags={[]} />);
        
    expect(component.find('.tags').exists()).toEqual(false);         
  });
});