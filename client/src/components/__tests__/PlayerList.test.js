import React from "react";
import PlayerList from "../PlayerList";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);
const mockData = (data = [
  { name: "Alex Morgan", country: "United States", searches: 100 },
  { name: "Megan Rapinoe", country: "United States", searches: 99 },
  { name: "Marta", country: "Brazil", searches: 18 }
]);

test("Render Ball Count", () => {
  const wrapper = rtl.render(<PlayerList data={mockData} />);
  const element = wrapper.getByText(/ball/i);
  expect(element).toHaveTextContent("Ball: 3");
});

test("Render Strike Count", () => {
  const wrapper = rtl.render(<Display data={mockData} />);
  const element = wrapper.getByText(/strike/i);
  expect(element).toHaveTextContent("Strike: 2");
});

test("Render Foul Count", () => {
  const wrapper = rtl.render(<Display data={mockData} />);
  const element = wrapper.getByText(/foul/i);
  expect(element).toHaveTextContent("Foul: 4");
});

test("Render Hit Count", () => {
  const wrapper = rtl.render(<Display data={mockData} />);
  const element = wrapper.getByText(/hit/i);
  expect(element).toHaveTextContent("Hit: 10");
});
