import React, { PropTypes } from 'react';
import ModalsContainer from '../containers/ModalsContainer';
import Radium from 'radium';
import {StyleRoot, Style} from 'radium';
import Header from './Header';
import colors from '../styles/colors';

const App = ({ children }) => (
    <StyleRoot>
        <Style
            rules={{
                body: {
                    background: colors.background,
                    padding: '0',
                    margin: '0',
                    fontFamily: 'Helvetica Neue'
                }
            }}

        />

        <div>
            <Header />
            <ModalsContainer />
            { children }
        </div>
    </StyleRoot>
);

App.propTypes = {
    children: PropTypes.object
};


export default Radium(App);
