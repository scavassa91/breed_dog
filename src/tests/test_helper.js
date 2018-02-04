import React from 'react';
import ReactDOM from 'react-dom';
// Import TestRenderer to render the components
import TestRenderer from 'react-test-renderer';

// Import createStore and applyMiddleware to create the store
import { createStore, applyMiddleware } from 'redux';
// Import Provider to create the store
import { Provider } from 'react-redux';
// Import redux promice to handle the promises
import promise from 'redux-promise';

// Import all reducers
import reducers from '../reducers';

// Create a global instance to mount and unmount the component
let componentInstance;

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  // Creates the store with middleware
  const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

  // Creates the component with redux store and sending props to the component
  componentInstance = TestRenderer.create(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // Return the testable Objetc
  return componentInstance.root;
}

// Destroy the component
function unmountComponent (component) {
  componentInstance.unmount(component)
}

// Export render and destroy functions
export { renderComponent, unmountComponent };
