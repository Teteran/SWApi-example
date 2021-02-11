import * as React from 'react';
import { Card } from '../';
import renderer from 'react-test-renderer';

it('renders card correctly', () => {
  const tree = renderer.create(<Card name="Test" mass={123} />).toJSON();
  expect(tree).toMatchSnapshot();
});
