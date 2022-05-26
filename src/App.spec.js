import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import App from "./App";

const renderApp = () => render(<App />);

afterEach(() => {
  cleanup();
});

test('Should say hello world!', () => {
  let { getByTestId } = renderApp();

  expect(getByTestId('output')).toHaveTextContent("Hello world!");
});
