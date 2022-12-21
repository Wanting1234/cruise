import { screen } from "@testing-library/react";
import Content from "./Content";
import {act} from "react-dom/test-utils";
import {renderWithProviders} from "../../../test/utils";

describe('Content', () => {
    test('should render overview and agent list', async () => {
        const promise = Promise.resolve()
        renderWithProviders(
                <Content />
            )
        await act(() => promise)
        expect(screen.getByRole('overview')).toHaveClass('overview');
        expect(screen.getByRole('region')).toHaveClass('agent-list');
    })
})
