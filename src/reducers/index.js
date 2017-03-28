import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DataReducer from './DataReducer';
import FavouriteReducer from './FavouriteReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    auth: AuthReducer,
    kindergartens: DataReducer,
    favourites: FavouriteReducer,
    selectedKindergartenId: SelectionReducer
});
