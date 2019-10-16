import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Scrolling from "./Scrolling";

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

describe("Scrolling", () => {
  it("renders values from 'scroll' property", () => {
    act(() => {
      render(
        <Scrolling render={scroll => `X: ${scroll.x}, Y: ${scroll.y}`} />,
        container
      );
    });

    expect(container.textContent).toBe("X: 0, Y: 0");
  });

  it("renders values from 'scroll' property after scrolling to 0, 100", () => {
    window.scrollTo = jest.fn((x, y) => {
      window.scrollX = x
      window.scrollY = y
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      render(
        <Scrolling render={scroll => `X: ${scroll.x}, Y: ${scroll.y}`} />,
        container
      );

      expect(container.textContent).toBe("X: 0, Y: 0");

      window.scrollTo(0, 100);
    });

    expect(container.textContent).toBe("X: 0, Y: 100");
  });
});
