import * as types from '../actions/types';
import _ from 'lodash';

const modals = (state = [], action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            const modal = {
                modalId: action.modalId,
                data: action.data
            };

            return state.concat(modal);
        case types.CLOSE_MODAL:
            return _.filter(state, (m) => {
                return m.modalId !== action.modalId;
            });
        case types.CLOSE_LAST_MODAL:
            const lastIndex = state.length - 1;
            return state.slice(lastIndex, 0);
        default:
            return state;
    }
};


export default modals;
