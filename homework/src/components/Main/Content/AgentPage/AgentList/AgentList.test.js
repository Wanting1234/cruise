import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {AgentList} from "./AgentList";
import store from "../../../../../app/store";
import {renderWithProviders} from "../../../../../test/utils";
import userEvent from "@testing-library/user-event";

describe('AgentList', () => {
    const initialAgents = {
        "agents": [
            {
                "name": "bjstdmngbdr08.thoughtworks.com",
                "os": "windows",
                "status": "building",
                "type": "virtual",
                "ip": "192.168.1.80",
                "location": "/var/lib/cruise-agent",
                "resources": [
                    "Firefox",
                    "Safari"
                ],
                "id": 1
            },
            {
                "name": "bjstdmngbdr10.thoughtworks.com",
                "os": "ubuntu",
                "status": "building",
                "type": "physical",
                "ip": "192.168.1.117",
                "location": "/var/lib/cruise-agent",
                "resources": [
                    "Firefox",
                    "Safari"
                ],
                "id": 2
            }
        ]
    }

    test('should render agent list', () => {
        render(
            <Provider store={store}>
                <AgentList/>
            </Provider>)

        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Physical')).toBeInTheDocument();
        expect(screen.getByText('Virtual')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByTestId('icon-th-card')).toBeInTheDocument();
        expect(screen.getByTestId('icon-th-list')).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    test('should render all agents', () => {
        renderWithProviders(<AgentList/>, {
            preloadedState: {
                agents: initialAgents
            }
        })

        expect(screen.getAllByRole('listitem')).toHaveLength(2)
    });

    test('should render physical agent when click physical button', () => {
        renderWithProviders(<AgentList/>, {
            preloadedState: {
                agents: initialAgents
            }
        })

        userEvent.click(screen.getByTestId('Physical'))

        expect(screen.getAllByRole('listitem')).toHaveLength(1)
    });

    test('should render virtual agent when click virtual button', () => {
        renderWithProviders(<AgentList/>, {
            preloadedState: {
                agents: initialAgents
            }
        })

        userEvent.click(screen.getByTestId('Virtual'))

        expect(screen.getAllByRole('listitem')).toHaveLength(1)
    });
})
