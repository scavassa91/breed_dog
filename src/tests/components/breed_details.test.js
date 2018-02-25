import React from 'react';

// Impost functions to create and destroy the component
import { renderComponent, unmountComponent } from '../test_helper';

// Import the component BreedDetails
import BreedDetails from '../../components/breed_details';

describe('Breed Details', () => {
  // Create the component to be available for all tests
  let component;

  // Instance a component before each test
  beforeEach(() => {
    // Create a mock props to pass through component
    const props = { breed: "poodle-toy" };
    // Instanciate the component
    component = renderComponent(BreedDetails, props);
  })

  // Renders the component
  it('shows the breed details', () => {
    expect(component.findByProps({className: "breed-details"}));
  });

  // Destroy the component after each test
  afterEach(() => {
    unmountComponent(component);
  })

});
