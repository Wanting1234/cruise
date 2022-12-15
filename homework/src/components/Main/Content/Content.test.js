import {render, screen} from "@testing-library/react";
import Content from "./Content";
import store from "../../../app/store";
import {Provider} from "react-redux";

describe('Content', () => {
    test('should render overview and agent list', () => {
        render(
            <Provider store={store}>
                <Content />
            </Provider>
            )

        expect(screen.getByRole('overview')).toHaveClass('overview');
        expect(screen.getByRole('region')).toHaveClass('agent-list');
    })
})
