import React from 'react';
import '@testing-library/jest-dom';
import {screen} from '@testing-library/react';
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import {renderWithProviders} from "../../test/utils";


describe('Header', () => {
    it('should render logo', () => {
        renderWithProviders(<Header/>)

        expect(screen.getByAltText('cruise')).toBeInTheDocument();
        expect(screen.getByAltText('avatars')).toBeInTheDocument();
    });

    it('should show user info correctly', () => {
        renderWithProviders(<Header/>)

        userEvent.hover(screen.getByAltText('user-avatar'))
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
    });
});
