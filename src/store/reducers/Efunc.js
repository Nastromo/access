

export const eacc = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SUBMIT_ACC_E`:
            return action.obj;

        case `CHANGE_FIRST_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.firstName = action.text;
            return newState;

        case `CHANGE_LAST_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.lastName = action.text;
            return newState;

        case `CHANGE_DOB_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.dob = action.text;
            return newState;

        case `CHANGE_PHONE_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phone = action.text;
            return newState;

        case `CHANGE_STREET_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.street = action.text;
            return newState;

        case `CHANGE_CITY_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.city = action.text;
            return newState;

        case `CHANGE_STATE_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.state = action.text;
            return newState;

        case `CHANGE_ZIP_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.zip = action.text;
            return newState;

        case `CHANGE_BAR_E`:
            newState = JSON.parse(JSON.stringify(state));
            newState.barCode = action.text;
            return newState;

        case `CHECK_BOX_SET`:
            newState = JSON.parse(JSON.stringify(state));
            switch (action.obj.id) {
                case `weight`:
                    newState.testType = `Weight Management`;
                    return newState;

                case `nutr`:
                    newState.testType = `Nutritional Deficiency`;
                    return newState;

                case `telo`:
                    newState.testType = `Telomers`;
                    return newState;

                default: return state;
            }



        case `SET_EGEN_DROP_OPTION`:
            newState = JSON.parse(JSON.stringify(state));
            switch (action.obj.id) {
                case `genderefunc`:
                    newState.gender = action.obj.option;
                    return newState;

                default: return state;
            }

        default: return state;

    }
}