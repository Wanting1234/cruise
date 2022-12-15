import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Header from "./Header";
import userEvent from "@testing-library/user-event";


describe('Header', () => {
    it('should render logo', () => {
        render(<Header/>)

        expect(screen.getByAltText('cruise')).toBeInTheDocument();
        expect(screen.getByAltText('user-avatar')).toBeInTheDocument();
    });

    it('should show user info correctly', () => {
        render(<Header/>)

        userEvent.hover(screen.getByAltText('user-avatar'))
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
    });
});
