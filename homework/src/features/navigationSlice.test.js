import reducer, {setNavigationState} from './navigationSlice'

describe('navigationSlice', () => {
    test('should return initial state', () => {
        expect(reducer(undefined, {payload: undefined})).toEqual(true)
    });

    test('should make navigation invisible', () => {
        const previousState = true
        expect(reducer(previousState, setNavigationState(false))).toEqual(false)
    });

    test('should make navigation visible', () => {
        const previousState = false
        expect(reducer(previousState, setNavigationState(true))).toEqual(true)
    });
})
