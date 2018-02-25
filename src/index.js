import React from 'react';
// Import to render the application
import ReactDOM from 'react-dom';

//// Import createStore and applyMiddleware to create the store
import { createStore, applyMiddleware } from 'redux';
// Import Provider to create the store
import { Provider } from 'react-redux';
// Import redux promice to handle the promises
import promise from 'redux-promise';

// Import all reducers
import reducers from './reducers';

// Import the application style
import './styles/style.css';

// Import the app component
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

// Creates the store with middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Render the application and create the redux store
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
