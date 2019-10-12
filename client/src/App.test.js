import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(rtl.cleanup);

test("ballCount increments", () => {
  const wrapper = rtl.render(<App />);
  const display = wrapper.getByText(/ball:\W/i);
  const button = wrapper.getByText("Ball");
  rtl.fireEvent.click(button)
  expect(display).toHaveTextContent("Ball: 1");
});

test("ballCount resets at 4", () => {
  const wrapper = rtl.render(<App />);
  const display = wrapper.getByText(/ball:\W/i);
  const button = wrapper.getByText("Ball");
  rtl.fireEvent.click(button)
  rtl.fireEvent.click(button)
  rtl.fireEvent.click(button)
  rtl.fireEvent.click(button)
  expect(display).toHaveTextContent(/[0-3]/);
});

test("strikeCount increments", () => {
  const wrapper = rtl.render(<App />);
  const display = wrapper.getByText(/strike:\W/i);
  const button = wrapper.getByText("Strike");
  rtl.fireEvent.click(button)
  expect(display).toHaveTextContent("Strike: 1");
});

test("strikeCount resets at 3", () => {
  const wrapper = rtl.render(<App />);
  const display = wrapper.getByText(/strike:\W/i);
  const button = wrapper.getByText("Strike");
  rtl.fireEvent.click(button)
  rtl.fireEvent.click(button)
  rtl.fireEvent.click(button)
  expect(display).toHaveTextContent(/[0-2]/);
});

test("foulCount increments", () => {
  const wrapper = rtl.render(<App />);
  const display = wrapper.getByText(/foul:\W/i);
  const button = wrapper.getByText("Foul");
  rtl.fireEvent.click(button)
  rtl.fireEvent.click(button)
  expect(display).toHaveTextContent("Foul: 2");
});

test("hitCount increments", () => {
  const wrapper = rtl.render(<App />);
  const display = wrapper.getByText(/hit:\W/i);
  const button = wrapper.getByText("Hit");
  rtl.fireEvent.click(button)
  rtl.fireEvent.click(button)
  expect(display).toHaveTextContent("Hit: 2");
});