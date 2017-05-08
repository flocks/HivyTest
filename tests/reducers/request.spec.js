import * as types from '../../app/actions/types';
import reducer from '../../app/reducers/requests';


describe('Reducers', () => {
    it('should add a request to the state at the beginning and set the proper id attribute', () => {
        expect(
            reducer([{id: '1' }], {
                type: types.CREATE_REQUEST,
                request: {}
            })
        ).toEqual(
            [{id: '2'}, {id: '1'}]
        );
    });

});
