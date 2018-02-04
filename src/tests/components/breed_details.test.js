import React from 'react';

import { renderComponent, unmountComponent } from '../test_helper';

import BreedDetails from '../../components/breed_details';

describe('Breed Details', () => {
  let component;
  beforeEach(() => {
    const props = { breed: "poodle-toy" };
    component = renderComponent(BreedDetails, props);
  })

  it('shows the breed details', () => {
    expect(component.findByProps({className: "breed-details col-md-8 float-left"}));
  });

  afterEach(() => {
    unmountComponent(component);
  })

});
