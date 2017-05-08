/* eslint-disable no-undef */
import { openModal } from '../app/actions';
import { closeModal } from '../app/actions';
import * as types from '../app/actions/types';
// import jest from 'jest';

describe('Actions Creators', () => {
    it('open modal action', () => {
        const action = openModal('modalId', {data: 'test'});
        expect(action).toEqual({
            type: types.OPEN_MODAL,
            modalId: 'modalId',
            data: {
                'data': 'test'
            }
        });
    });

    it('close modal action', () => {
        const action = closeModal('modalId');
        expect(action).toEqual({
            type: types.CLOSE_MODAL,
            modalId: 'modalId'
        });
    });
});

