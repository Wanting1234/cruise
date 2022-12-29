import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import OverView from "./OverView";
import store from "../../../../app/store";
import renderWithProviders from "../../../../test/utils";

describe("Overview", () => {
  test("should render overview", () => {
    render(
      <Provider store={store}>
        <OverView />
      </Provider>
    );

    expect(screen.getByText("building")).toBeInTheDocument();
    expect(screen.getByText("idle")).toBeInTheDocument();
    expect(screen.getByText("ALL")).toBeInTheDocument();
    expect(screen.getByText("VIRTUAL")).toBeInTheDocument();
    expect(screen.getByText("PHYSICAL")).toBeInTheDocument();
  });

  test("should render overview with correct data", () => {
    const initialAgents = {
      agents: [
        {
          name: "bjstdmngbdr08.thoughtworks.com",
          os: "windows",
          status: "building",
          type: "virtual",
          ip: "192.168.1.80",
          location: "/var/lib/cruise-agent",
          resources: ["Firefox", "Safari"],
          id: 1,
        },
      ],
    };

    renderWithProviders(<OverView />, {
      preloadedState: {
        agents: initialAgents,
      },
    });

    expect(screen.getByTestId("building")).toHaveTextContent("1");
    expect(screen.getByTestId("idle")).toHaveTextContent("0");
    expect(screen.getByTestId("all")).toHaveTextContent("1");
    expect(screen.getByTestId("virtual")).toHaveTextContent("1");
    expect(screen.getByTestId("physical")).toHaveTextContent("0");
  });
});
