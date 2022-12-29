import reducer, { setIsNavigationShow } from "./navigationSlice";

describe("navigationSlice", () => {
  test("should return initial state", () => {
    expect(reducer(undefined, { payload: undefined }).isNavigationShow).toEqual(
      true
    );
  });

  test("should make navigation invisible", () => {
    const previousState = {
      isNavigationShow: true,
    };
    expect(
      reducer(previousState, setIsNavigationShow(false)).isNavigationShow
    ).toEqual(false);
  });

  test("should make navigation visible", () => {
    const previousState = {
      isNavigationShow: false,
    };
    expect(
      reducer(previousState, setIsNavigationShow(true)).isNavigationShow
    ).toEqual(true);
  });
});
