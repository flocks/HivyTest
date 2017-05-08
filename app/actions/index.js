import * as types from './types';
// import utils from '../utils/utils';


export function openModal(modalId, data) {
    return {
        type: types.OPEN_MODAL,
        modalId: modalId,
        data: data
    };
}

export function closeModal(modalId) {
    return {
        type: types.CLOSE_MODAL,
        modalId: modalId
    };
}

export function closeLastModal() {
    return {
        type: types.CLOSE_LAST_MODAL
    };
}

export function createRequest(request) {
    return {
        type: types.CREATE_REQUEST,
        request: request
    };
}
