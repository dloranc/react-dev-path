import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from './Counter';

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

jest.useFakeTimers();

describe('Counter', () => {
  it('should render current value of counter', () => {
    act(() => {
      render(<Counter/>, container);
    });

    expect(container.textContent).toBe("0");
  });

  it('should render 1 when time pass by 100 milliseconds', () => {

    act(() => {
      render(<Counter/>, container);

      jest.advanceTimersByTime(100);
    });

    expect(container.textContent).toBe("1");
  });
});
