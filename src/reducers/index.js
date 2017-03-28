import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    auth: AuthReducer,
    kindergartens: DataReducer,
    favourites: DataReducer,
    selectedKindergartenId: SelectionReducer
});
