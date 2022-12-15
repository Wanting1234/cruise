import {render, screen} from "@testing-library/react";
import Main from "./Main";
import {Provider} from "react-redux";
import store from "../../app/store";
import userEvent from "@testing-library/user-event";

describe('Main', () => {
    test('should render navigation and content', () => {
        render(
            <Provider store={store}>
                <Main/>
            </Provider>
        )

        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByRole('content')).toBeInTheDocument();
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
