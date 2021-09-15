import React from 'react';
import { render } from 'react-dom';
// import Amplify from 'aws-amplify';
// // import config from './aws-exports.js';

// // Amplify.configure(config);
import "tailwindcss/tailwind.css"

import { JumboTron } from './components/JumboTron';

const App = () => {
  return (
      <JumboTron/>
  );
};

render(<App />, document.getElementById('root'))