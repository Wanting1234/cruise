import {render, screen} from "@testing-library/react";
import {AgentItem} from "./AgentItem";
import React from "react";
import {Provider} from "react-redux";
import store from "../../../../../../app/store";

describe('AgentItem', () => {
    const initialAgent = {
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

    test('should render agent item', async () => {
        render(
            <Provider store={store}>
                <AgentItem agent={initialAgent} />
            </Provider>
        )

        expect(screen.getByAltText('agent-os')).toBeInTheDocument();
        expect(screen.getByText('bjstdmngbdr08.thoughtworks.com')).toBeInTheDocument();
        expect(screen.getByText('building')).toBeInTheDocument();
        expect(screen.getByText('192.168.1.80')).toBeInTheDocument();
        expect(screen.getByText('/var/lib/cruise-agent')).toBeInTheDocument();
        expect(screen.getByTestId('1')).toHaveClass('add-button');
        expect(screen.getByTestId('Firefox')).toHaveClass('resource-button');
        expect(screen.getByTestId('Chrome')).toHaveClass('resource-button');
        expect(screen.getByText('Deny')).toBeInTheDocument();
    });
})
