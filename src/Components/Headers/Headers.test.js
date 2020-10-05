import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Headers from './Headers';

afterEach(() => {
  cleanup();
});

describe('Headers component', () => {
  it('should render okay', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Headers></Headers>, div);
  });
  it('html should match snapshot', () => {
    const tree = renderer.create(<Headers/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

