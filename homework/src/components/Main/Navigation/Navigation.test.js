import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Navigation from "./Navigation";
import {Provider} from "react-redux";
import store from "../../../app/store";

describe('Navigation', () => {
    test('should list all menu', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Navigation/>
                </Provider>
            </MemoryRouter>)

        expect(screen.getByText('DASHBOARD')).toBeInTheDocument();
        expect(screen.getByText('AGENT')).toBeInTheDocument();
        expect(screen.getByText('MY CRUISE')).toBeInTheDocument();
        expect(screen.getByText('HELP')).toBeInTheDocument();

    })
})
