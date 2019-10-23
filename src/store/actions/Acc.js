import API from '../../utils/Api';
import { showNotification } from '../actions/Notification';
import { setQuery, setResults } from './SearchInput';


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


export const changeSetLocId = (text) => {
    return async (dispatch, getState) => {
        try {
            const arr = text.split(` | `);
            dispatch(setQuery({
                id: `locations`,
                text: arr[0]
            }));
            dispatch(setResults({
                id: `locations`,
                list: []
            }));
        } catch (err) {
            console.log(err);
        }
    }
}

export const changeSetPhyId = (text) => {
    return async (dispatch, getState) => {
        try {
            const arr = text.split(` | `);
            dispatch(setQuery({
                id: `physician`,
                text: arr[0]
            }));
            dispatch(setResults({
                id: `physician`,
                list: []
            }));
        } catch (err) {
            console.log(err);
        }
    }
}

export const changeSpecQty = (i, qty) => {
    return {
        type: 'CHANGE_SPEC_QTY',
        i,
        qty
    }
};

export const changeWarCom = (i, text) => {
    return {
        type: 'CHANGE_WAR_COM',
        i,
        text
    }
};

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

export const rel2Ins = (e) => ({
    type: 'HANDLE_OPTION',
    index: e.target.id,
    text: e.target.value
});

export const setIns = (obj) => ({
    type: 'SET_INS',
    obj
});

export const delIns = (index) => ({
    type: 'DEL_INS',
    index
});

export const getIns = (name) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/get-ins?key=${name}`);
            dispatch(setIns(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

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

export const setCold = (text) => ({
    type: 'CHANGE_COLD',
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

export const changeCold = (e) => {
    return async (dispatch, getState) => {
        let dob = "";
        dob = dob + e.target.value;
        if (dob.length === 2 || dob.length === 5) {
            dob = dob + "/";
        }
        dispatch(setCold(dob));
    }
};

export const handleDeleteCold = (e) => {
    return async (dispatch, getState) => {
        const cold = getState().acc.cold ? getState().acc.cold : "";
        if ((e.keyCode === 8 && cold.length === 6) || (e.keyCode === 8 && cold.length === 3)) {
            dispatch(setCold(cold.slice(0, -1)));
        }
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


export const changeTab = (bool) => ({
    type: 'CHANGE_TAB',
    bool: !bool
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

export const addSpec = (obj) => ({
    type: 'ADD_SPEC',
    obj
});

export const delSet = (index) => ({
    type: 'DEL_SET',
    index
});

export const addWar = (obj) => ({
    type: 'ADD_WAR',
    obj
});

export const delWar = (index) => ({
    type: 'DEL_WAR',
    index
});

export const addSet = (text) => ({
    type: 'ADD_SET',
    text
});

export const createAccession = () => {
    return async (dispatch, getState) => {
        try {
            const phy = getState().searchQuery.physician;
            const loc = getState().searchQuery.locations;
            const acc = getState().acc;
            const ins = getState().acc.insurances;
            const insurances = JSON.parse(ins ? ins : "[]");
            for (let i = 0; i < insurances.length; i++) {
                insurances[i].rel2Ins = getState().newDDOption[`refToIns${i}`]
                insurances[i].primary = getState().checkbox[`insCheck${i}`]
            }
            acc.insurances = JSON.stringify(insurances);
            acc.clientLocationId = loc;
            acc.physicianId = phy;
            await API.post(`/v1/create-accession`, acc);
            dispatch(showNotification(`Saved...`, `notification-show notification-green`));
            dispatch(setAcc({}));
        } catch (err) {
            dispatch(showNotification(`Error...`, `notification-show`));
            console.log(err);
        }
    }
}