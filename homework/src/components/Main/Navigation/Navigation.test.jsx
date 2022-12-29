import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";
import renderWithProviders from "../../../test/utils";

describe("Navigation", () => {
  test("should list all menu", () => {
    renderWithProviders(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText("DASHBOARD")).toBeInTheDocument();
    expect(screen.getByText("AGENT")).toBeInTheDocument();
    expect(screen.getByText("MY CRUISE")).toBeInTheDocument();
    expect(screen.getByText("HELP")).toBeInTheDocument();
  });
});
