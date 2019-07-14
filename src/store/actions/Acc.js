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

export const changeTime = (e) => ({
    type: 'CHANGE_TIME',
    text: e.target.value
});

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

export const changeDob = (e) => ({
    type: 'CHANGE_DOB',
    text: e.target.value
});

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