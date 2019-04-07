import React from 'react';
import { mount } from 'enzyme';

import CalcButton from '../CalcButton';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

it('can assign extra class to button', () => {
  const element = mount(
    <CalcButton
      className="extra"
    >
      1
    </CalcButton>
  );

  expect(element.find('button').prop('className')).toMatch(/extra/);
});

it('call props.onClick when button be clicked', () => {
  const onClick = jest.fn();
  const element = mount(
    <CalcButton
      onClick={onClick}
    >
      1
    </CalcButton>
  );

  const button = element.find('button');
  button.simulate('click');

  expect(onClick).toBeCalled();
});
