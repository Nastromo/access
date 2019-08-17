export const checkbox = (state = {}, action) => {
    if (action.type === `CHECK_BOX`) {
        let newState = JSON.parse(JSON.stringify(state));
        for (let prop in newState) {
            if (newState.hasOwnProperty(prop)) {
                newState[prop] = false;
            }
        }
        newState[action.obj.id] = action.obj.status;
        return newState;
    }
    return state;
}