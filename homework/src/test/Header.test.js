import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from "../components/Header/Header";
import userEvent from "@testing-library/user-event";


describe('Header', () => {
    it('should render logo',  () => {
        render(<Header />)
        expect(screen.getByAltText('cruise')).toBeInTheDocument();
        expect(screen.getByAltText('user-avatar')).toBeInTheDocument();
    });

    it('should show user info correctly', () => {
        render(<Header />);
        userEvent.click(screen.getByRole('checkbox'));
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
    });
});
