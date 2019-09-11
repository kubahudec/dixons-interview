import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contain list of used libraries', () => {
  const dom = render(<App />);
  const libraries = [
    'styled-components',
    'testing-library',
    'prop-types',
    'react-pure-loaders'
  ];
  libraries.forEach(
    (library) => {
      expect(dom.getByText(library)).toBeInTheDocument();
    }
  )
})
