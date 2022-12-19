import reducer, {setPopupBoxState} from './popupSlice'

describe('popupSlice', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {payload: undefined})).toEqual(false)
    });

    test('should make popup box visible', () => {
        const previousState = false
        expect(reducer(previousState, setPopupBoxState(true))).toEqual(true)
    });

    test('should make popup box invisible', () => {
        const previousState = true
        expect(reducer(previousState, setPopupBoxState(false))).toEqual(false)
    })
})
