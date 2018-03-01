import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import {createStore} from 'redux';
import rootReducer from './redux/Reducer';
import {Provider} from 'react-redux';


const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}> 
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
