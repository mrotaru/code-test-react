import React from 'react'
import Beer from '.';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const beer = { name: 'Foo Beer'}
  const tree = renderer
    .create(<Beer beer={beer}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
