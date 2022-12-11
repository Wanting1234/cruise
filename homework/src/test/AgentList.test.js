import React from "react";
import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';
import {AgentList} from "../components/Agent/AgentList";
import store from "../app/store";
import {fetchAgents} from "../features/agentSlice";
import {Provider} from "react-redux";

describe('AgentList', () => {
    test('should render agent list when filter is all', async () => {
        store.dispatch(fetchAgents())

        render(
            <Provider store={store}>
                <AgentList filter={"All"}/>
            </Provider>)

        await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument())
        await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(11))
    });

    test('should render agent list when filter is physical', async () => {
        store.dispatch(fetchAgents())

        render(
            <Provider store={store}>
                <AgentList filter={"Physical"}/>
            </Provider>)

        await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument())
        await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(3))
    });

    test('should render agent list when filter is virtual', async () => {
        store.dispatch(fetchAgents())

        render(
            <Provider store={store}>
                <AgentList filter={"Virtual"}/>
            </Provider>)

        await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument())
        await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(8))
    });
})
