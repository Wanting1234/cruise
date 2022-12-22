import reducer, {setPopupBoxState, setPosition} from './popupSlice'

describe('popupBoxState', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {payload: undefined}).popupBoxState).toEqual(false)
    });

    test('should make popup box state becomes true', () => {
        const previousState = {
            popupBoxState: false,
        }
        expect(reducer(previousState, setPopupBoxState(true)).popupBoxState).toEqual(true)
    });

    test('should make popup box state becomes false', () => {
        const previousState = {
            popupBoxState: true,
        }
        expect(reducer(previousState, setPopupBoxState(false)).popupBoxState).toEqual(false)
    })
})



describe('positionSlice', () => {
    test('should return initial state', () => {
        expect(reducer(undefined, {payload: undefined}).position).toEqual({x:0, y:0})
    });

    test('should return new state', () => {
        const previousState = {
            position: {x:0, y:0},
        }
        expect(reducer(previousState, setPosition({x:3, y:5})).position).toEqual({x:3, y:5})
    });
})
