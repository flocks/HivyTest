import React from 'react';
import { mount} from 'enzyme';
import Home from '../app/containers/Home';
import fakeStore from './helpers/fakeStore';
import { Provider } from 'react-redux';


const getState = () => ({equities: {}});

jest.mock("../node_modules/react-datepicker/dist/react-datepicker.css", () => jest.fn());
 
describe('<Home />', () => {
    it('should display a UIButton', () => {
        const component = mount(
            <Home store={fakeStore(getState)}/>
        );

        expect(component.find('UIButton').length).toBe(1);
    });

    it('should map dispatch to props', () => {
        const store = fakeStore(getState);

        const component = mount(
            <Provider store={store}>
                <Home store={fakeStore(getState)}/>
            </Provider>
        );

        expect(component.find('Home').props().onModal).toBeDefined();
    });
});
