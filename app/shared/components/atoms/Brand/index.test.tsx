import React from "react";
import { render, screen } from "@testing-library/react";
import Brand from "./index";

describe("Brand component test suite", () => {
  it("renders correctly", () => {
    const { getByAltText } = render(<Brand />);
    expect(getByAltText("Lizit")).toBeInTheDocument();
  });
});
