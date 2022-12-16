import React from 'react'
import {render} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import agentReducer from '../features/agentSlice'
import popupReducer from '../features/popupSlice'
import positionReducer from "../features/positionSlice";
import selectedAgentIdReducer from "../features/selectedAgentIdSlice";

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = configureStore({
            reducer: {
                agents: agentReducer,
                popup: popupReducer,
                position: positionReducer,
                selectedAgent: selectedAgentIdReducer
            }, preloadedState
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({children}) {
        return <Provider store={store}>{children}</Provider>
    }

    return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}
