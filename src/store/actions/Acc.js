import API from '../../utils/Api';
import { showNotification } from '../actions/Notification';


export const changeIns = (e) => ({
    type: 'CHANGE_INS',
    text: e.target.value
});

export const changeBiilStr = (e) => ({
    type: 'CHANGE_BILL_STR',
    text: e.target.value
});

export const changeBillCity = (e) => ({
    type: 'CHANGE_BILL_CITY',
    text: e.target.value
});

export const changeBillZip = (e) => ({
    type: 'CHANGE_BILL_ZIP',
    text: e.target.value
});

export const changeLocId = (e) => ({
    type: 'CHANGE_LOC_ID',
    text: e.target.value
});

export const changePhisId = (e) => ({
    type: 'CHANGE_PHIS_ID',
    text: e.target.value
});

export const setTime = (text) => ({
    type: 'CHANGE_TIME',
    text
});

export const handlePolicy = (e) => ({
    type: 'HANDLE_POLICY',
    index: e.target.id,
    text: e.target.value
});

export const handleCode = (e) => ({
    type: 'HANDLE_CODE',
    index: e.target.id,
    text: e.target.value
});

export const handleOption = (e) => ({
    type: 'HANDLE_OPTION',
    index: e.target.id,
    text: e.target.value
});

export const handleTimeDelete = (e) => {
    return async (dispatch, getState) => {
        const time = getState().acc.time ? getState().acc.time : "";
        if (e.keyCode === 8 && time.length === 3) {
            dispatch(setTime(time.slice(0, -1)));
        }
    }
};

export const changeTime = (e) => {
    return async (dispatch, getState) => {
        let time = "";
        time = time + e.target.value;
        if (time.length === 2) {
            time = time + ":";
        }
        dispatch(setTime(time));
    }
};

export const changeDiag = (e) => ({
    type: 'CHANGE_DIAG',
    text: e.target.value
});

export const changeSpec = (e) => ({
    type: 'CHANGE_SPEC',
    text: e.target.value
});

export const changeFirst = (e) => ({
    type: 'CHANGE_FIRST',
    text: e.target.value
});

export const changeLast = (e) => ({
    type: 'CHANGE_LAST',
    text: e.target.value
});

export const changeMname = (e) => ({
    type: 'CHANGE_M_NAME',
    text: e.target.value
});

export const setDob = (text) => ({
    type: 'CHANGE_DOB',
    text
});

export const handleDelete = (e) => {
    return async (dispatch, getState) => {
        const dob = getState().acc.dob ? getState().acc.dob : "";
        if ((e.keyCode === 8 && dob.length === 6) || (e.keyCode === 8 && dob.length === 3)) {
            dispatch(setDob(dob.slice(0, -1)));
        }
    }
};

export const changeDob = (e) => {
    return async (dispatch, getState) => {
        let dob = "";
        dob = dob + e.target.value;
        if (dob.length === 2 || dob.length === 5) {
            dob = dob + "/";
        }
        dispatch(setDob(dob));
    }
};

export const changeChart = (e) => ({
    type: 'CHANGE_CHART',
    text: e.target.value
});

export const changeSet = (e) => ({
    type: 'CHANGE_SET',
    text: e.target.value
});

export const changeStreet = (e) => ({
    type: 'CHANGE_STREET',
    text: e.target.value
});

export const changeCity = (e) => ({
    type: 'CHANGE_CITY',
    text: e.target.value
});

export const changeZip = (e) => ({
    type: 'CHANGE_ZIP',
    text: e.target.value
});

export const changePhone = (e) => ({
    type: 'CHANGE_PHONE',
    text: e.target.value
});

export const handleAddInfo = (e) => ({
    type: 'CHANGE_ADD_INFO',
    text: e.target.value
});

export const changeEon = (e) => ({
    type: 'CHANGE_EON',
    text: e.target.value
});

export const setAcc = (obj) => ({
    type: 'SET_ACC',
    obj
});

export const delDiag = (index) => ({
    type: 'DEL_DIAG',
    index
});

export const addDiag = (text) => ({
    type: 'ADD_DIAG',
    text
});

export const delSpec = (index) => ({
    type: 'DEL_SPEC',
    index
});

export const addSpec = (text) => ({
    type: 'ADD_SPEC',
    text
});

export const delSet = (index) => ({
    type: 'DEL_SET',
    index
});

export const addSet = (text) => ({
    type: 'ADD_SET',
    text
});

export const createAccession = () => {
    return async (dispatch, getState) => {
        try {
            const acc = getState().acc;
            await API.post(`/v1/create-accession`, acc);
            dispatch(showNotification(`Saved...`, `notification-show notification-green`));
            dispatch(setAcc({}));
        } catch (err) {
            dispatch(showNotification(`Error...`, `notification-show`));
            console.log(err);
        }
    }
}