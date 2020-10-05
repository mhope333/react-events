import React from 'react';
import Event from './Event';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

const event = {
  id: '123',
  category: {
    '1': {
      id: 13341,
      title: "title"
    }
  },
  name: {
    en: 'eventName'
  },
  start_time: 1595829600,
  enrollment_deadline_utc: 1595829600,
  location: {
    en: 'location'
  },
  timezone: 'timezone',
  enrollment_url: 'www.someUrl.com'
};
const favourites = [];
function mockFunction() {
  return 'mock';
}

afterEach(() => {
  cleanup();
});

describe('Event component', () => {
  it('html should match snapshot', () => {
    const tree = renderer.create(<Event key={event.id} event={event} tooggleFavourite={mockFunction} favourites={favourites}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // TO DO: 
  // - add test for dateTimeConverter function
  // - add test for iconSelector function
  // - add unit tests for Event-List (With data and error scenario)
});
