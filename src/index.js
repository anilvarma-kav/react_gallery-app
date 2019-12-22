import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

//Rendering App Component to root div
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
