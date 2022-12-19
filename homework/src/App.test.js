import { screen, waitFor} from '@testing-library/react';
import App from './App';
import {renderWithProviders} from "./test/utils";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('App', () => {
  const initialAgent = {
    agents: [
      {
        "name": "bjstdmngbdr10.thoughtworks.com",
        "os": "ubuntu",
        "status": "building",
        "type": "physical",
        "ip": "192.168.1.117",
        "location": "/var/lib/cruise-agent",
        "resources": [
          "Chrome"
        ],
        "id": 14
      },
      {
        "name": "bjstdmngbdr10.thoughtworks.com",
        "os": "ubuntu",
        "status": "building",
        "type": "physical",
        "ip": "192.168.1.117",
        "location": "/var/lib/cruise-agent",
        "resources": [],
        "id": 15
      }
    ]
  }

  test('should show popup box when click add btn', async () => {
    renderWithProviders(<App />)

    expect(screen.queryByTestId('popup-box')).not.toBeInTheDocument();

    await waitFor(() => {
      userEvent.click(screen.getByTestId('1'))
    })

    expect(await screen.findByTestId('popup-box')).toBeInTheDocument();

  });

  test('should delete a resource when click del-btn', async () => {
    renderWithProviders(<App /> )

    expect(await screen.findByTestId('Firefox')).toHaveClass('resource-button');

    userEvent.click(screen.getByTestId('del-Firefox'))

    await waitFor(() => {
      expect(screen.queryByTestId('Firefox')).not.toBeInTheDocument()
    })
  });

  test('should add a resource when click add resource btn', async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        agents: initialAgent,
        popup: true,
        position: {x:0, y:0},
        selectedAgent: 14,
      }
    })

    userEvent.type(screen.getByPlaceholderText('e.g.Chrome,Firefox'), 'test01')
    userEvent.click(screen.getByText('Add Resources'))

    await waitFor(() => {
      expect(screen.getByText('Test01')).toBeInTheDocument()
    })
  });

  test('should add two resources when click add resource btn', async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        agents: initialAgent,
        popup: true,
        position: {x:0, y:0},
        selectedAgent: 15,
      }
    })

    userEvent.type(screen.getByPlaceholderText('e.g.Chrome,Firefox'), 'test02, test03')
    userEvent.click(screen.getByText('Add Resources'))

    await waitFor(() => {
      expect(screen.getByText('Test02')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText('Test03')).toBeInTheDocument()
    })
  });

  test('should make popup box invisible when click cancel btn', async () => {
    const promise = Promise.resolve()
    renderWithProviders(<App />, {
      preloadedState: {
        popup: true,
        position: {x: 0, y: 0},
        selectedAgent: 3,
      }
    })

    await act(() => promise)
    expect(screen.getByTestId('popup-box')).toBeInTheDocument();

    userEvent.click(screen.getByText('Cancel'))

    expect(screen.queryByTestId('popup-box')).not.toBeInTheDocument()
  });
})
