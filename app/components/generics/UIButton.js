import React, { PropTypes } from 'react';
import Radium from 'radium';
import colors from '../../styles/colors';

const UIButton = ({ ...props }) => (
    <button
        onClick={props.onClick}
        style={[style.base, style[props.kind], props.style]}
        disabled={props.disabled}
    >
        {props.label}
    </button>
);

UIButton.defaultProps = {
    onClick: () => {},
    kind: 'normal',
    label: '',
    style: {},
    disabled: false
};

UIButton.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    kind: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool
};

const style = {
    base: {
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        outline: 'none',
        height: '40px',
        fontSize: '14px',
        padding: '0 30px',
        transition: 'background 200ms ease'
    },
    blue: {
        background: colors.blue,
        fontWeight: 'bold',
        color: 'white',
        ':hover': {
            background: 'rgb(95, 170, 245)'
        }
    },
    cancel: {
        background: 'none',
        color: colors.grey,
        fontWeight: 'bold'
    }
};

export default Radium(UIButton);
