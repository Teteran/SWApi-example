import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../';

describe('Test Button component', () => {
  it('button renders correctly', () => {
    const tree = shallow(<Button onPress={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
  it('Test click event', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button onPress={mockFn} />);
    const button = wrapper.find('[testID="button"]');

    button.simulate('click');

    expect(mockFn).toHaveBeenCalled();
  });
});
