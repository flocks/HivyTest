import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import modals from './modals';
import requests from './requests';

const rootReducer = combineReducers({
    modals,
    requests,
    routing
});

export default rootReducer;
