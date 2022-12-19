import {render, screen} from "@testing-library/react";
import Content from "./Content";
import store from "../../../app/store";
import {Provider} from "react-redux";
import {act} from "react-dom/test-utils";

describe('Content', () => {
    test('should render overview and agent list', async () => {
        const promise = Promise.resolve()
        render(
            <Provider store={store}>
                <Content />
            </Provider>
            )
        await act(() => promise)
        expect(screen.getByRole('overview')).toHaveClass('overview');
        expect(screen.getByRole('region')).toHaveClass('agent-list');
    })
})
