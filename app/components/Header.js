import React from 'react';
import colors from '../styles/colors';
import Radium from 'radium';
import Logo from './Logo';

const Header = () => (
    <div style={style.base}>
        <div style={style.wrapper}>
            <Logo />
        </div>
    </div>
);

const style = {
    base: {
        background: colors.header,
        display: 'table',
        height: '80px',
        boxShadow: '5px 2px 3px #dae1e7',
        paddingLeft: '50px',
        boxSizing: 'border-box',
        width: '100%'
    },
    wrapper: {
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    title: {
        fontSize: '1.3em',
        margin: '0',
        opacity: '0.7'
    }
};

export default Radium(Header);
