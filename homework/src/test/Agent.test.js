import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';
import Content from "../components/Content/Content";
import {Provider} from "react-redux";
import store from "../app/store";
import {fetchAgents} from "../features/agentSlice";

describe('Agent', () => {
    test('should render agents overview', () => {
        render(
            <Provider store={store}>
                <Content/>
            </Provider>
        )

        expect(screen.getAllByText('building')[0]).toBeInTheDocument();
        expect(screen.getAllByText('idle')[0]).toBeInTheDocument();
        expect(screen.getByText('ALL')).toBeInTheDocument();
        expect(screen.getByText('PHYSICAL')).toBeInTheDocument();
        expect(screen.getByText('VIRTUAL')).toBeInTheDocument();
    });

    test('should render agent navbar', () => {
        render(
            <Provider store={store}>
                <Content/>
            </Provider>
        )

        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Physical')).toBeInTheDocument();
        expect(screen.getByText('Virtual')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(document.getElementsByClassName('icon-th-card')).toBeTruthy();
        expect(document.getElementsByClassName('icon-th-list')).toBeTruthy();
    });

    test('should render agent list', async () => {
        store.dispatch(fetchAgents())

        render(
            <Provider store={store}>
                <Content/>
            </Provider>
        )

        await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument())
        await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(11))
    });
})
