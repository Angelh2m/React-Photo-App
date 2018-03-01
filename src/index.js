import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
// Redux
import {createStore} from 'redux';
import rootReducer from './redux/Reducer';
import {Provider} from 'react-redux';
import App from './Components/App'


// Create a store! 
// The reducer has all the data for use 
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}> 
        <BrowserRouter>

            <App/>
            
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));


// 1.- Create a reducer and conncet it to the index.js  
// 2.- App.js becomes the connector to STATE and the rendered component
// index.js
    // |- App.js <Connects> Main.js
        
   
