import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import friendsReducer from './friends';

const rootReducer = combineReducers({
    friends: friendsReducer,
    router: routerReducer,
});

export default rootReducer;
