import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button test suite", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Button text="Continuar" isValid variant="primary" />
    );
    expect(getByText("Continuar")).toBeInTheDocument();
  });
});
