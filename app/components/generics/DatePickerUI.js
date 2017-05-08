import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Radium from 'radium';

import 'react-datepicker/dist/react-datepicker.css';

class DatePickerUI extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.props.onChange(date);
    }

    render() {
        const date = this.props.date || moment();
        return (
            <div style={ this.props.style }>
                <DatePicker
                    selected={date}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

DatePickerUI.propTypes = {
    date: PropTypes.object,
    onChange: PropTypes.func,
    style: PropTypes.object
};

export default Radium(DatePickerUI);
