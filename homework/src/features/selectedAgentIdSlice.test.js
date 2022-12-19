import reducer, {selectCurrentAgentId} from './selectedAgentIdSlice'

describe('selectedAgentId', () => {
    test('should return initial state', () => {
        expect(reducer(undefined, {payload: undefined})).toEqual(-1)
    });

    test('should return selected agent id', () => {
        const initialState = -1
        expect(reducer(initialState, selectCurrentAgentId(3))).toEqual(3)
    });
})
