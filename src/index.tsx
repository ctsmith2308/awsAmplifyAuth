import React from 'react';
import { render } from 'react-dom';

import "tailwindcss/tailwind.css"

import { JumboTron } from './components/JumboTron';

const App = () => {
  return (
      <JumboTron/>
  );
};

render(<App />, document.getElementById('root'))