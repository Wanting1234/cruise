import {screen, waitFor} from '@testing-library/react';
import App from './App';
import {renderWithProviders} from "./test/utils";
import userEvent from "@testing-library/user-event";
import React from "react";

describe('App', () => {
  const initialAgent = {
    agents: [
      {
        "name": "bjstdmngbdr08.thoughtworks.com",
        "os": "windows",
        "status": "building",
        "type": "virtual",
        "ip": "192.168.1.80",
        "location": "/var/lib/cruise-agent",
        "resources": [
          "Firefox",
          "Safari",
          "Ubuntu",
          "Chrome"
        ],
        "id": 1
      }
    ]
  }

  test('should show popup box when click add btn', () => {
    renderWithProviders(<App />, {
      preloadedState: {
        agents: initialAgent,
        popup: false,
        position: {x:0, y:0},
        selectedAgent: 1,
      }
    })

    expect(screen.queryByTestId('popup-box')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('1'))

    expect(screen.getByTestId('popup-box')).toBeInTheDocument();

  });

  test('should delete a resource when click del-btn', async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        agents: initialAgent
      }
    })

    expect(screen.getByTestId('Firefox')).toHaveClass('resource-button');

    userEvent.click(screen.getByTestId('del-Firefox'))

    await waitFor(() => {
      expect(screen.queryByTestId('Firefox')).not.toBeInTheDocument()
    })
  });
})
