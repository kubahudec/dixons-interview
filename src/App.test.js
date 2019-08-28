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
    'create-react-app',
    'styled-components',
    'testing-library'
  ];
  libraries.forEach(
    (library) => {
      expect(dom.getByText(library)).toBeInTheDocument();
    }
  )
})
