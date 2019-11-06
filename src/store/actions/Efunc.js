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

