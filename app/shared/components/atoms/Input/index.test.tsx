import React from "react";
import { render } from "@testing-library/react";
import Input from "./index";

describe("Input component test suite", () => {
  it("should be render a input Nombre", () => {
    const { getByText } = render(
      <Input type="text" label="Nombre" name="test" onEmit={() => {}} />
    );
    expect(getByText("Nombre")).toBeInTheDocument();
  });

  it("should be render a input Categoria", () => {
    const { getByText } = render(
      <Input type="text" label="Categoria" name="test" onEmit={() => {}} />
    );
    expect(getByText("Categoria")).toBeInTheDocument();
  });

  it("should be render a input Tarifa", () => {
    const { getByText } = render(
      <Input type="text" label="Tarifa" name="test" onEmit={() => {}} />
    );
    expect(getByText("Tarifa")).toBeInTheDocument();
  });

  it("should be render a input Description", () => {
    const { getByText } = render(
      <Input
        type="textarea"
        label="Descripcion"
        name="test"
        onEmit={() => {}}
      />
    );
    expect(getByText("Descripcion")).toBeInTheDocument();
  });
});
