import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import History from "./History";
import {renderWithProviders} from "../../../../test/utils";

describe('history', () => {
    test('should render history list', () => {
        renderWithProviders(<History />);

        expect(screen.getAllByRole('listitem')).toHaveLength(11);
    })
})
