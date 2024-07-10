import React from "react";
import { render } from "@testing-library/react";
import Loader from "./index";

describe("Input component test suite", () => {
  it("should be render a Label loader", () => {
    const { getByText } = render(<Loader label="Cargando..." />);
    expect(getByText("Cargando...")).toBeInTheDocument();
  });
});
