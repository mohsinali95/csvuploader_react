const INITIAL_STATE = {
    testText : 'hello'
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_TEST_TEXT":
            return {
              ...state
            }
        default:
            return state;
    }

}