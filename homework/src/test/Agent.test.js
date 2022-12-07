import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Agent from "../components/Agent/Agent";
import {getAgents} from "../api/api";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import {act} from "react-dom/test-utils";
import {AgentList} from "../components/Agent/AgentList";
import {Navbar} from "../components/Agent/Navbar";
import changeFilter from '../components/Agent/Agent'

// jest.mock('../api/api')
// jest.mock('axios')

describe('Agent', () => {
    test('should render agents overview', () => {
        render(<Agent/>)

        expect(screen.getAllByText('building')[0]).toBeInTheDocument();
        expect(screen.getAllByText('idle')[0]).toBeInTheDocument();
        expect(screen.getByText('ALL')).toBeInTheDocument();
        expect(screen.getByText('PHYSICAL')).toBeInTheDocument();
        expect(screen.getByText('VIRTUAL')).toBeInTheDocument();
    });

    test('should render agent navbar', () => {
        render(<Agent/>)

        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Physical')).toBeInTheDocument();
        expect(screen.getByText('Virtual')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(document.getElementsByClassName('icon-th-card')).toBeTruthy();
        expect(document.getElementsByClassName('icon-th-list')).toBeTruthy();
    });

    // test('should render agent list', async () => {
    //     await render(<Agent/>)
        // const mockData = [{
        //     "name": "bjstdmngbdr08.thoughtworks.com",
        //     "os": "windows",
        //     "status": "building",
        //     "type": "virtual",
        //     "ip": "192.168.1.80",
        //     "location": "/var/lib/cruise-agent",
        //     "resources": [
        //         "Firefox",
        //         "Safari",
        //         "Ubuntu",
        //         "chrome"
        //     ],
        //     "id": 1
        // },];
        // const mockData = [];
        // axios.get.mockResolvedValue({
        //     data: mockData,
        // });
        // await act(async () => {
        //     await axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
        // })
        //
        // const result = await getAgents();
        //
        // expect(result).toEqual(mockData);
        // await getAgents.mockResolvedValue({mockData})

        // expect(screen.getByRole('list')).toBeInTheDocument();
        // expect(screen.getAllByRole('listitem')).toHaveLength('1');
    // });

    // test('should render agent list according to filter', async () => {
    //     await render(<Agent/>)
    //     const mockData = [{
    //         "name": "bjstdmngbdr08.thoughtworks.com",
    //         "os": "windows",
    //         "status": "building",
    //         "type": "virtual",
    //         "ip": "192.168.1.80",
    //         "location": "/var/lib/cruise-agent",
    //         "resources": [
    //             "Firefox",
    //             "Safari",
    //             "Ubuntu"
    //         ],
    //         "id": 2
    //     },
    //         {
    //             "name": "bjstdmngbdr10.thoughtworks.com",
    //             "os": "ubuntu",
    //             "status": "building",
    //             "type": "physical",
    //             "ip": "192.168.1.117",
    //             "location": "/var/lib/cruise-agent",
    //             "resources": [
    //                 "Firefox",
    //                 "Safari"
    //             ],
    //             "id": 3
    //         },];
    //
    //     await getAgents.mockResolvedValue({mockData})
    //     await userEvent.click(screen.getByText('Physical'))
    //     await expect(screen.getByRole('list')).toBeInTheDocument();
    //     await expect(screen.getAllByRole('listitem')).toHaveLength('1');
    // });

    test('should render agent list when filter is virtual when click it', () => {
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

        render(<Navbar changeFilter={changeFilter} />)
        // userEvent.click(screen.getByText('All'))

        render(<AgentList agents={mockAgents} filter={filter} addResources={jest.fn()} deleteResource={jest.fn()}/>)

        expect(screen.getByRole('list')).toBeInTheDocument();
        // expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });
})
