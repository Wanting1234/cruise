import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import History from "../components/Navigation/History";

describe('history', () => {
    test('should render history list', () => {
        render(<History />);

        expect(screen.getAllByRole('listitem')).toHaveLength(11);
    })
})
