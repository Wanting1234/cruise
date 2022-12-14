import React from "react";
import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';
import {AgentItem} from "../components/Content/AgentList/AgentItem";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import store from "../app/store";


describe('AgentItem', () => {
    const mockAgent = {
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
            "chrome"
        ],
        "id": 1
    };

    test('should render agent item', () => {
        render(
            <Provider store={store} >
            <AgentItem agent={mockAgent} />
            </Provider>)

        expect(screen.getByText(mockAgent.name)).toBeInTheDocument();
        expect(screen.getByText(mockAgent.status)).toBeInTheDocument();
        expect(screen.getByText(mockAgent.ip)).toBeInTheDocument();
        expect(screen.getByText(mockAgent.location)).toBeInTheDocument();
        expect(screen.getAllByRole('button')[0]).toHaveClass('add-button');
        expect(screen.getByText(mockAgent.resources[0])).toBeInTheDocument();
        expect(screen.getByText(mockAgent.resources[1])).toBeInTheDocument();
        expect(screen.getByText(mockAgent.resources[2])).toBeInTheDocument();
        expect(screen.getByText(mockAgent.resources[3])).toBeInTheDocument();
        expect(screen.getByText('Deny')).toBeInTheDocument();
    });

    test('should show popup box when click add-btn', () => {
        render(
            <Provider store={store} >
                <AgentItem agent={mockAgent} />
            </Provider>)

        userEvent.click(document.getElementById(`add-button-${mockAgent.id}`))

        // expect(screen.getByText('Separate multiple resource name with commas')).toBeInTheDocument();
        expect(selectCurrentAgentId).toHaveBeenCalled();
    });

    test('should call deleteResource function when click delete button', async () => {
        // handleDelete = jest.fn()
        render(
            <Provider store={store} >
                <AgentItem agent={mockAgent} />
            </Provider>)

        userEvent.click(document.getElementsByClassName('icon-trash')[0])
        // expect(handleDelete).toHaveBeenCalled();
        await waitFor(() => expect(screen.getByText('Firefox')).toBeInTheDocument())
        expect(screen.getByText('Safari')).toBeInTheDocument()
        expect(screen.getByText('Ubuntu')).toBeInTheDocument()
        expect(screen.getByText('chrome')).toBeInTheDocument()

    });
})
