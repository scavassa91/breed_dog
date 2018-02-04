import React from 'react';

import { renderComponent, unmountComponent } from '../test_helper';

import ListBreed from '../../components/list_breed';

describe('List Breed', () => {
  let component;
  beforeEach(() => {
    const props = { breeds: { "poodle-toy": "poodle-toy" } };
    component = renderComponent(ListBreed, props);
  })

  it('shows the lsit breed', () => {
    expect(component.findByProps({className: "list-breed col-md-3 float-left"}));
  });

  afterEach(() => {
    unmountComponent(component);
  })

});
