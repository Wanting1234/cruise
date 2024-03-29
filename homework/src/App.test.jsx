import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import React from "react";
import App from "./App";
import renderWithProviders from "./test/utils";

describe("App", () => {
  test("should add a resource when click add resource button", async () => {
    renderWithProviders(<App />);

    expect(screen.queryByTestId("popup-box")).not.toBeInTheDocument();

    await waitFor(() => {
      userEvent.click(screen.getByTestId("add-button-2"));
    });

    expect(await screen.findByTestId("popup-box")).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText("e.g.Chrome,Firefox"), "test01");
    userEvent.click(screen.getByText("Add Resources"));

    await waitFor(() => {
      expect(screen.getByText("Test01")).toBeInTheDocument();
    });
  });

  test("should add two resources when click add resource button", async () => {
    renderWithProviders(<App />);

    await waitFor(() => {
      userEvent.click(screen.getByTestId("add-button-3"));
    });

    userEvent.type(
      screen.getByPlaceholderText("e.g.Chrome,Firefox"),
      "test02, test03"
    );
    userEvent.click(screen.getByText("Add Resources"));

    await waitFor(() => {
      expect(screen.getByText("Test02")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Test03")).toBeInTheDocument();
    });
  });

  test("should make popup box invisible when click cancel button", async () => {
    const promise = Promise.resolve();
    renderWithProviders(<App />, {
      preloadedState: {
        popup: {
          isPopupShow: true,
          position: { x: 0, y: 0 },
        },
      },
    });

    await act(() => promise);
    expect(screen.getByTestId("popup-box")).toBeInTheDocument();

    userEvent.click(screen.getByText("Cancel"));

    expect(screen.queryByTestId("popup-box")).not.toBeInTheDocument();
  });
});
