import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import mockDate from 'mockDate';
import CurrentTime from './CurrentTime';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

mockDate.set('2015-10-10 10:45:37');

describe('CurrentTime', () => {
  it('should render current time', () => {
    act(() => {
      render(<CurrentTime/>, container);
    });

    expect(container.textContent).toBe("Current time: 10:45:37");
  });
});
