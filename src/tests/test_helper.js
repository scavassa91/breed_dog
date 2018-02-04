import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import reducers from '../reducers';

// Create a global instance to mount and unmount the component
let componentInstance;

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

  componentInstance = TestRenderer.create(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return componentInstance.root;
}

function unmountComponent (component) {
  componentInstance.unmount(component)
}

export { renderComponent, unmountComponent };
