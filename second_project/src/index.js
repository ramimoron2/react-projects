import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App.js';
import App2 from './Container/App2.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
