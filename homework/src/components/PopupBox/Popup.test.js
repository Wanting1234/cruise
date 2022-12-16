import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {Popup} from "./Popup";
import {Provider} from "react-redux";
import store from "../../app/store";

describe('Popup', () => {
    test('should render popup box content', () => {
        render(
            <Provider store={store}>
                <Popup/>
            </Provider>)

        expect(screen.getByText('Separate multiple resource name with commas')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText('Add Resources')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
})
