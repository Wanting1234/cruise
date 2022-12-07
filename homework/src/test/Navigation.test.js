import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Navigation from "../components/LeftNavigation/Navigation";
import {MemoryRouter} from 'react-router-dom';

describe('Navigation', () => {
    test('should list all menu', () => {
        render(
            <MemoryRouter>
                <Navigation/>
            </MemoryRouter>)

        expect(screen.getAllByRole('listitem')).toHaveLength(4);
        expect(screen.getByText('DASHBOARD')).toBeInTheDocument();
        expect(screen.getByText('AGENT')).toBeInTheDocument();
        expect(screen.getByText('MY CRUISE')).toBeInTheDocument();
        expect(screen.getByText('HELP')).toBeInTheDocument();

    })
})
