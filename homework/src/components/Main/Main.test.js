import {render, screen} from "@testing-library/react";
import Main from "./Main";
import {Provider} from "react-redux";
import store from "../../app/store";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('Main', () => {
    test('should render navigation and content', async () => {
        const promise = Promise.resolve()
        render(
            <Provider store={store}>
                <Main/>
            </Provider>
        )

        await act(() => promise)
        expect(await screen.findByRole('main')).toBeInTheDocument();
        expect(await screen.findByRole('navigation')).toBeInTheDocument();
        expect(await screen.findByRole('content')).toBeInTheDocument();
    });

    test('should render navigation and other content page when click DASHBOARD', () => {
        render(
            <Provider store={store}>
                <Main/>
            </Provider>
        )

        userEvent.click(screen.queryByText('DASHBOARD'));

        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.queryByRole('content')).not.toBeInTheDocument();
        expect(screen.getByRole('content-page')).toBeInTheDocument();
        expect(screen.getByText('dashboard Loading...')).toBeInTheDocument()
    })
})
