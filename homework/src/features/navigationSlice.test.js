import reducer, {setNavigationState} from './navigationSlice'

describe('navigationSlice', () => {
    test('should return initial state', () => {
        expect(reducer(undefined, {payload: undefined}).navigationState).toEqual(true)
    });

    test('should make navigation invisible', () => {
        const previousState = {
            navigationState: true
        }
        expect(reducer(previousState, setNavigationState(false)).navigationState).toEqual(false)
    });

    test('should make navigation visible', () => {
        const previousState = {
            navigationState: false
        }
        expect(reducer(previousState, setNavigationState(true)).navigationState).toEqual(true)
    });
})
