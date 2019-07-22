import moment from 'moment';

export const acc = (state = {}, action) => {
    let newState, diags;
    switch (action.type) {
        case `SET_ACC`:
            newState = action.obj;
            return newState;

        case `CHANGE_INS`:
            newState = JSON.parse(JSON.stringify(state));
            newState.insurances = action.text;
            return newState;

        case `CHANGE_BILL_STR`:
            newState = JSON.parse(JSON.stringify(state));
            newState.billingStreets = action.text;
            return newState;

        case `CHANGE_BILL_CITY`:
            newState = JSON.parse(JSON.stringify(state));
            newState.billingCity = action.text;
            return newState;

        case `CHANGE_BILL_ZIP`:
            newState = JSON.parse(JSON.stringify(state));
            newState.billingZip = action.text;
            return newState;

        case `CHANGE_LOC_ID`:
            newState = JSON.parse(JSON.stringify(state));
            newState.clientLocationId = action.text;
            return newState;

        case `CHANGE_PHIS_ID`:
            newState = JSON.parse(JSON.stringify(state));
            newState.physicianId = action.text;
            return newState;

        case `CHANGE_TIME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.time = action.text;
            return newState;

        case `CHANGE_DIAG`:
            newState = JSON.parse(JSON.stringify(state));
            newState.diagnoses = action.text;
            return newState;

        case `CHANGE_SPEC`:
            newState = JSON.parse(JSON.stringify(state));
            newState.specimens = action.text;
            return newState;

        case `CHANGE_FIRST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.firstName = action.text;
            return newState;

        case `CHANGE_LAST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.lastName = action.text;
            return newState;

        case `CHANGE_M_NAME`:
            newState = JSON.parse(JSON.stringify(state));
            newState.mName = action.text;
            return newState;

        case `CHANGE_DOB`:
            newState = JSON.parse(JSON.stringify(state));
            newState.dob = action.text;
            return newState;

        case `CHANGE_CHART`:
            newState = JSON.parse(JSON.stringify(state));
            newState.patientChart = action.text;
            return newState;

        case `CHANGE_SET`:
            newState = JSON.parse(JSON.stringify(state));
            newState.orderSets = action.text;
            return newState;

        case `CHANGE_STREET`:
            newState = JSON.parse(JSON.stringify(state));
            newState.street = action.text;
            return newState;

        case `CHANGE_CITY`:
            newState = JSON.parse(JSON.stringify(state));
            newState.city = action.text;
            return newState;

        case `CHANGE_ZIP`:
            newState = JSON.parse(JSON.stringify(state));
            newState.zip = action.text;
            return newState;

        case `CHANGE_PHONE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.phone = action.text;
            return newState;

        case `CHANGE_ADD_INFO`:
            newState = JSON.parse(JSON.stringify(state));
            newState.addInfo = action.text;
            return newState;

        case `CHANGE_EON`:
            newState = JSON.parse(JSON.stringify(state));
            newState.eon = action.text;
            return newState;

        case `ADD_DIAG`:
            newState = JSON.parse(JSON.stringify(state));
            diags = JSON.parse(newState.diagnoses ? newState.diagnoses : "[]");
            diags.push(action.text);
            newState.diagnoses = JSON.stringify(diags);
            return newState;

        case `DEL_DIAG`:
            newState = JSON.parse(JSON.stringify(state));
            diags = JSON.parse(newState.diagnoses ? newState.diagnoses : "[]");
            diags.splice(action.index, 1);
            newState.diagnoses = JSON.stringify(diags);
            return newState;

        case `ADD_SPEC`:
            newState = JSON.parse(JSON.stringify(state));
            diags = JSON.parse(newState.specimens ? newState.specimens : "[]");
            diags.push(action.text);
            newState.specimens = JSON.stringify(diags);
            return newState;

        case `DEL_SPEC`:
            newState = JSON.parse(JSON.stringify(state));
            diags = JSON.parse(newState.specimens ? newState.specimens : "[]");
            diags.splice(action.index, 1);
            newState.specimens = JSON.stringify(diags);
            return newState;

        case `ADD_SET`:
            newState = JSON.parse(JSON.stringify(state));
            diags = JSON.parse(newState.orderSets ? newState.orderSets : "[]");
            diags.push(action.text);
            newState.orderSets = JSON.stringify(diags);
            return newState;

        case `DEL_SET`:
            newState = JSON.parse(JSON.stringify(state));
            diags = JSON.parse(newState.orderSets ? newState.orderSets : "[]");
            diags.splice(action.index, 1);
            newState.orderSets = JSON.stringify(diags);
            return newState;

        case `SET_DROP_DOWN_OPTION_ACC`:
            newState = JSON.parse(JSON.stringify(state));
            switch (action.obj.id) {
                case `billStates`:
                    newState.billingState = action.obj.option;
                    return newState;

                case `date`:
                    switch (action.obj.option) {
                        case `Today`:
                            newState.colDate = moment().format('MM/DD/YYYY');
                            return newState;
                        case `Yesterday`:
                            newState.colDate = moment().subtract(1, "days").format('MM/DD/YYYY');
                            return newState;
                        case `2 Days Ago`:
                            newState.colDate = moment().subtract(2, "days").format('MM/DD/YYYY');
                            return newState;
                        default: return newState;
                    }

                case `fasting`:
                    newState.fasting = action.obj.option;
                    return newState;

                case `bills`:
                    newState.billTo = action.obj.option;
                    return newState;

                case `stat`:
                    newState.stat = action.obj.option;
                    return newState;

                case `orderType`:
                    newState.orderType = action.obj.option;
                    return newState;

                case `state`:
                    newState.state = action.obj.option;
                    return newState;

                case `sex`:
                    newState.sex = action.obj.option;
                    return newState;

                default: return state;
            }

        default: return state;
    }
}