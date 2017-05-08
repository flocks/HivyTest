import * as types from '../actions/types';
import moment from 'moment';

const defaultState = [
    {
        id: '1',
        title: 'Order food for lunch meeting',
        date: moment().subtract(1, 'day')
    },
    {
        id: '2',
        title: 'Order new laptop for new employee',
        date: moment().subtract(2, 'day')
    }
];

const requests = (state = defaultState, action) => {
    switch (action.type) {
        case types.CREATE_REQUEST:
            const request = action.request;
            request.id = (state.length + 1) + '';
            return [request, ...state];
        default:
            return state;
    }
};


export default requests;
