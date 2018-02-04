import React from 'react';

// Impost functions to create and destroy the component
import { renderComponent, unmountComponent } from '../test_helper';

// Import the component ListBreed
import ListBreed from '../../components/list_breed';

describe('List Breed', () => {
  // Create the component to be available for all tests
  let component;

  // Instance a component before each test
  beforeEach(() => {
    // Create a mock props to pass through component
    const props = { breeds: { "poodle-toy": "poodle-toy" } };
    // Instanciate the component
    component = renderComponent(ListBreed, props);
  })

  // Renders the component
  it('shows the lsit breed', () => {
    expect(component.findByProps({className: "list-breed col-md-3 float-left"}));
  });

  // Destroy the component after each test
  afterEach(() => {
    unmountComponent(component);
  })

});
