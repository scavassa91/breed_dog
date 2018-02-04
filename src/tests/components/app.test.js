import React from 'react';

import { renderComponent, unmountComponent } from '../test_helper';

import App from '../../components/app';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows the app', () => {
    expect(component.findByProps({className: "app"}))
  });

  afterEach(() => {
    unmountComponent(component);
  })

});
