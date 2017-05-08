import React, { PropTypes } from 'react';
import Radium from 'radium';
import moment from 'moment';

const UIDate = ({ ...props }) => (
    <span style={props.style}>{ moment(props.date).fromNow() }</span>
);

UIDate.defaultProps = {
    date: new Date(),
    style: {}
};

UIDate.propTypes = {
    date: PropTypes.object,
    style: PropTypes.object
};

export default Radium(UIDate);
