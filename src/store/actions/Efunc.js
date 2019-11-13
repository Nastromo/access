import API from '../../utils/Api';
import { showNotification } from '../actions/Notification';



export const changeFirstName = (e) => ({
    type: 'CHANGE_FIRST_E',
    text: e.target.value
});

export const changeLastName = (e) => ({
    type: 'CHANGE_LAST_E',
    text: e.target.value
});

export const changeDob = (e) => ({
    type: 'CHANGE_DOB_E',
    text: e.target.value
});

export const changePhone = (e) => ({
    type: 'CHANGE_PHONE_E',
    text: e.target.value
});

export const changeStreet = (e) => ({
    type: 'CHANGE_STREET_E',
    text: e.target.value
});

export const changeCity = (e) => ({
    type: 'CHANGE_CITY_E',
    text: e.target.value
});

export const changeState = (e) => ({
    type: 'CHANGE_STATE_E',
    text: e.target.value
});

export const changeZip = (e) => ({
    type: 'CHANGE_ZIP_E',
    text: e.target.value
});

export const changeBarcode = (e) => ({
    type: 'CHANGE_BAR_E',
    text: e.target.value
});

export const setAcc = (obj) => ({
    type: 'SUBMIT_ACC_E',
    obj
});

export const submitEAcc = () => {
    return async (dispatch, getState) => {
        try {
            const acc = getState().eacc;
            await API.post(`/v1/e-acc`, acc);
            dispatch(setAcc({}));
            dispatch(showNotification(`Saved...`, `notification-show notification-green`));
        } catch (err) {
            dispatch(showNotification(`Error...`, `notification-show`));
            console.log(err);
        }
    }
}

export const clear = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setAcc({}));
            
        } catch (err) {
            console.log(err);
        }
    }
}

export const setEaccs = (list) => ({
    type: 'SET_EACCS_LIST',
    list
});

export const getEacc = (name) => {
    return async (dispatch, getState) => {
        try {
            const barCode = getState().eacc.barCode;
            const res = await API.get(`/v1/get-eacc?barCode=${barCode}`);
            if (res.data) dispatch(setAcc(res.data));
            else throw new Error(`No such barcode`);
        } catch (err) {
            dispatch(showNotification(`No such barcode...`, `notification-show`));
            console.log(err);
        }
    }
}

