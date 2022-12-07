import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {Popup} from "../components/Agent/Popup";
import userEvent from "@testing-library/user-event";

describe('Popup', () => {
    test('should render popup box content', () => {
        render(<Popup />)

        expect(screen.getByText('Separate multiple resource name with commas')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText('Add Resources')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });

    test('should call addResources function when click add resources button', () => {
        const triggerAddResource = jest.fn()
        render(<Popup toggle={jest.fn()} addResources={triggerAddResource} id={1}/>)

        userEvent.type(screen.getByRole('textbox'), 'firefox')
        userEvent.click(screen.getByText('Add Resources'))
        expect(triggerAddResource).toHaveBeenCalled();
    })
})
