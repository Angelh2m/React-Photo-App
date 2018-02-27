import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
