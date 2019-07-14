import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { acc } from './Acc';



const RootReducer = combineReducers({
    acc,
    loginSpinner,
    notificationCss,
    notificationText,
    dropdownStatus,
    dropdownOption,
    
});


export default RootReducer;