import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import HistoryList from "./HistoryList";
import renderWithProviders from "../../../../test/utils";

describe("history", () => {
  test("should render history list", () => {
    renderWithProviders(<HistoryList />);

    expect(screen.getAllByRole("listitem")).toHaveLength(11);
  });
});
