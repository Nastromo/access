export const isSets = (state = true, action) => {
    switch (action.type) {
        case `CHANGE_TAB`:
            return action.bool;

        default: return state;
    }
}