import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Header from "../components/Header/Header";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";


describe('Header', () => {
    it('should render logo', () => {
        render(
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        )
        expect(screen.getByAltText('cruise')).toBeInTheDocument();
        expect(screen.getByAltText('user-avatar')).toBeInTheDocument();
    });

    it('should show user info correctly', () => {
        render(
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        )

        userEvent.hover(screen.getByAltText('user-avatar'))
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
    });
});
