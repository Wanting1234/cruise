import reducer, {setPosition} from './positionSlice'

describe('positionSlice', () => {
    test('should return initial state', () => {
        expect(reducer(undefined, {payload: undefined})).toEqual({x:0, y:0})
    });

    test('should return new state', () => {
        const initialState = {x:0, y:0}
        expect(reducer(initialState, setPosition({x:3, y:5}))).toEqual({x:3, y:5})
    });
})
