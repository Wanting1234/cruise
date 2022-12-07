import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {AgentList} from "../components/Agent/AgentList";

describe('AgentList', () => {
    test('should render agent list when filter is all', () => {
        const mockAgents = [
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
                    "chrome"
                ],
                "id": 1
            },
            {
                "name": "bjstdmngbdr08.thoughtworks.com",
                "os": "windows",
                "status": "building",
                "type": "physical",
                "ip": "192.168.1.80",
                "location": "/var/lib/cruise-agent",
                "resources": [
                    "Firefox",
                    "Safari",
                    "Ubuntu"
                ],
                "id": 2
            },
        ];

        render(<AgentList agents={mockAgents} filter={"All"} addResources={jest.fn()} deleteResource={jest.fn()}/>)

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

    test('should render agent list when filter is physical', () => {
        const mockAgents = [
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
                    "chrome"
                ],
                "id": 1
            },
            {
                "name": "bjstdmngbdr08.thoughtworks.com",
                "os": "windows",
                "status": "building",
                "type": "physical",
                "ip": "192.168.1.80",
                "location": "/var/lib/cruise-agent",
                "resources": [
                    "Firefox",
                    "Safari",
                    "Ubuntu"
                ],
                "id": 2
            },
        ];

        render(<AgentList agents={mockAgents} filter={"Physical"} addResources={jest.fn()} deleteResource={jest.fn()}/>)

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });

    test('should render agent list when filter is virtual', () => {
        const mockAgents = [
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
                    "chrome"
                ],
                "id": 1
            },
            {
                "name": "bjstdmngbdr08.thoughtworks.com",
                "os": "windows",
                "status": "building",
                "type": "physical",
                "ip": "192.168.1.80",
                "location": "/var/lib/cruise-agent",
                "resources": [
                    "Firefox",
                    "Safari",
                    "Ubuntu"
                ],
                "id": 2
            },
        ];

        render(<AgentList agents={mockAgents} filter={"Virtual"} addResources={jest.fn()} deleteResource={jest.fn()}/>)

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });
})
