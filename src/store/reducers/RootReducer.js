import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { acc } from './Acc';
import { searchQuery, searchLoading, searchResults } from '../reducers/SearchInput';



const RootReducer = combineReducers({
    searchQuery,
    searchLoading,
    searchResults,
    acc,
    loginSpinner,
    notificationCss,
    notificationText,
    dropdownStatus,
    dropdownOption,
    
});


export default RootReducer;