import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {StateMock} from '@react-mock/state'

import App from "./App";

afterEach(rtl.cleanup);

const renderComponent = (data) =>
  rtl.render(
    <StateMock state={data}>
      <App />
    </StateMock>
  );

const mockData = {players:[
  { name: "Alex Morgan", country: "United States", searches: 100 },
  { name: "Megan Rapinoe", country: "United States", searches: 99 },
  { name: "Marta", country: "Brazil", searches: 18 }
]}

test("renders 3 cards", () => {
  const wrapper = renderComponent(mockData);
  const element = wrapper.getAllByText(/name:/i);
  expect(element.length).toBe(3);
});
test("toggles filter", () => {
  const wrapper = renderComponent(mockData);
  const element = wrapper.getByTestId('form');
  const checkbox = element.childNodes[1];
  rtl.fireEvent.click(checkbox)
  expect(checkbox.childNodes[0]).toHaveProperty('checked', true);
});


test("dropdown ", () => {
  const wrapper = renderComponent(mockData);
  const element = wrapper.getByTestId('form');
  const dropdown = element.childNodes[0]
  rtl.fireEvent.click(dropdown)
  expect(dropdown).toHaveTextContent("United States");
});
