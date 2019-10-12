import React from "react";
import PlayerCard from "../PlayerCard";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);
const mockData = {
  name: "Alex Morgan",
  country: "United States",
  searches: 100
};

test("shows name", () => {
  const wrapper = rtl.render(<PlayerCard player={mockData} />);
  const element = wrapper.getByText(/name:/iw);
  expect(element).toHaveTextContent(/alex morgan/i);
});

test("shows country", () => {
  const wrapper = rtl.render(<PlayerCard player={mockData} />);
  const element = wrapper.getByText(mockData.country);
  expect(element).toHaveTextContent("United States");
});


test("shows searches", () => {
  const wrapper = rtl.render(<PlayerCard player={mockData} />);
  const element = wrapper.getByText(mockData.searches.toString());
  expect(element).toHaveTextContent("100");
});
