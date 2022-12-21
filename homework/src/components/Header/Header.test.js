import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import store from "../../app/store";


describe('Header', () => {
    it('should render logo', () => {
        render(
            <Provider store={store}>
                <Header/>
            </Provider>
        )

        expect(screen.getByAltText('cruise')).toBeInTheDocument();
        expect(screen.getByAltText('user-avatar')).toBeInTheDocument();
    });

    it('should show user info correctly', () => {
        render(
            <Provider store={store}>
                <Header/>
            </Provider>
        )

        userEvent.hover(screen.getByAltText('user-avatar'))
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
    });
});
