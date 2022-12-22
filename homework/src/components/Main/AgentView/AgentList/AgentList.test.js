import {screen, waitFor} from "@testing-library/react";
import {AgentList} from "./AgentList";
import {renderWithProviders} from "../../../../test/utils";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('AgentList', () => {
    const promise = Promise.resolve()

    test('should render agent list', async () => {
        renderWithProviders(<AgentList/>)

        await act(() => promise)
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Physical')).toBeInTheDocument();
        expect(screen.getByText('Virtual')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByTestId('icon-th-card')).toBeInTheDocument();
        expect(screen.getByTestId('icon-th-list')).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    test('should render all agents', async () => {
        renderWithProviders(<AgentList/>)

        await act(() => promise)

        expect(screen.getAllByRole('listitem')).toHaveLength(3)
    });

    test('should render physical agent when click physical button', async () => {
        renderWithProviders(<AgentList/>)

        await act(() => promise)
        userEvent.click(screen.getByTestId('Physical'))

        expect(screen.getAllByRole('listitem')).toHaveLength(2)
    });

    test('should render virtual agent when click virtual button', async () => {
        renderWithProviders(<AgentList/>)
        await act(() => promise)
        userEvent.click(screen.getByTestId('Virtual'))

        expect(screen.getAllByRole('listitem')).toHaveLength(1)
    });

    test('should delete a resource when click del-btn', async () => {
        renderWithProviders(<AgentList /> )

        expect(await screen.findByTestId('Firefox')).toHaveClass('resource-button');

        userEvent.click(screen.getByTestId('del-Firefox'))

        await waitFor(() => {
            expect(screen.queryByTestId('Firefox')).not.toBeInTheDocument()
        })
    });
})
