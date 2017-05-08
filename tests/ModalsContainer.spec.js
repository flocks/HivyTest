import React from 'react';
import { mount } from 'enzyme';
import ModalsContainer from '../app/containers/ModalsContainer';
import { Provider } from 'react-redux';
import fakeStore from './helpers/fakeStore';

jest.mock("../node_modules/react-datepicker/dist/react-datepicker.css", () => jest.fn());
jest.mock("../app/styles/react-select.css", () => jest.fn());

const zeroModalState = () => {
    return {
        modals: []
    };
};

const oneModalState = () => {
    return {
        modals: [{
            modalId: 'addProduct',
            data: {}
        }]

    };
};

const oneModalWrongNameState = () => {
    return {
        modals: [{
            modalId: 'id_wrong',
            data: {}
        }]
    };
};

describe('<ModalContainers />', () => {
    it('should render properly with 0 modal in state', () => {
        const component = mount(
            <ModalsContainer store={fakeStore(zeroModalState)} />
        );
        expect(component.children().length).toBe(0);
    });

    it('should render properly with the AddProductRequest in state', () => {
        const component = mount(
            <Provider store={fakeStore(oneModalState)}>
                <ModalsContainer store={fakeStore(oneModalState)} />
            </Provider>
        );
        expect(component.find('AddProductRequest').length).toBe(1);
    });

    it('should not render anything if modalId is wrong', () => {
        const component = mount(
            <ModalsContainer store={fakeStore(oneModalWrongNameState)} />
        );
        expect(component.children().length).toBe(0);
    });
});
