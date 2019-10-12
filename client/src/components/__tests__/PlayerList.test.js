import React from "react";
import PlayerList from "../PlayerList";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);
const mockData = [
  { name: "Alex Morgan", country: "United States", searches: 100 },
  { name: "Megan Rapinoe", country: "United States", searches: 99 },
  { name: "Marta", country: "Brazil", searches: 18 }
];

test("Render 3 cards", () => {
  const wrapper = rtl.render(<PlayerList data={mockData} />);
  const element = wrapper.getAllByText(/name:/i);
  expect(element.length).toBe(3);
});

test("Render a dropdown menu", () => {
  const wrapper = rtl.render(<PlayerList data={mockData} />);
  const element = wrapper.getByText('Filter by Country');
  expect(element.childNodes[1].nodeName).toContain('SELECT');
});

test("Render checkbox", () => {
  const wrapper = rtl.render(<PlayerList data={mockData} />);
  const element = wrapper.getByTestId('form');
  expect(element).toHaveFormValues(false);
});