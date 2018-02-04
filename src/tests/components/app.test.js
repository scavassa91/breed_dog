import React from 'react';

// Impost functions to create and destroy the component
import { renderComponent, unmountComponent } from '../test_helper';

// Import the component Ap
import App from '../../components/app';

describe('App', () => {
  // Create the component to be available for all tests
  let component;

  // Instance a component before each test
  beforeEach(() => {
    // Instanciate the component
    component = renderComponent(App);
  })

  // Renders the component
  it('shows the app', () => {
    expect(component.findByProps({className: "app"}))
  });

  // Destroy the component after each test
  afterEach(() => {
    unmountComponent(component);
  })

});
