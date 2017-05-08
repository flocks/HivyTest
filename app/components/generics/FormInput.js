import React, { PropTypes } from 'react';
import DatePickerUI from './DatePickerUI';
import _ from 'lodash';
import Radium from 'radium';

const FormInput = ({ ...props }) => {
    const handleChange = (field, event) => {
        props.onChange(event.target.value, field);
    };

    const handleChangeDate = (field, date) => {
        props.onChange(date, field);
    };

    if (props.field.type === 'text') {
        const value = props.field.value || '';
        return (
            <div style={ styles.fieldTitle }>
                <label>{ props.field.name }</label>
                <input style={ styles.right } type="text" value={ value } onChange={ handleChange.bind(this, props.field) }/>
            </div>
        );
    }

    if (props.field.type === 'date') {
        return (
            <div style={ styles.fieldTitle }>
                <label>{ props.field.name }</label>
                <DatePickerUI style={ styles.right } date={ props.field.value } onChange={ handleChangeDate.bind(this, props.field)}/>
            </div>
        );
    }

    if (props.field.type === 'radio') {
        return (
            <div>
                <div style={ styles.fieldTitle}>{ props.field.name }</div>
                { _.map(props.field.options, (option, key) => {
                    return (
                        <div style={ styles.option } key={ key }>
                            <input
                                type="radio"
                                id={ props.field.name + '_' + option }
                                style={[styles.radio, (props.field.value === option) && styles.radioIsChecked]}
                                value={ option }
                                onChange={ handleChange.bind(this, props.field)}
                                checked={ props.field.value === option }
                                name={ props.field.name }
                            />
                            <label
                                htmlFor={ props.field.name + '_' + option }
                                style={[styles.label, (props.field.value === option) && styles.labelIsChecked]}
                            >
                                <span style={[styles.span, (props.field.value === option) && styles.spanIsChecked]  }></span>
                                { option }
                            </label>
                        </div>
                    );
                })}
            </div>
        );
    }


    return (
        <div> no </div>
    );
};

const styles = {
    right: {
        float: 'right'
    },
    fieldTitle: {
        margin: '20px 10px 7px',
        fontWeight: 'bold'
    },
    option: {
        display: 'inline-block'
    },
    radio: {
        display: 'none'
    },
    span: {
        background: '#eae5e5',
        borderRadius: '50%',
        display: 'inline-block',
        width: '15px',
        height: '15px',
        verticalAlign: 'middle',
        margin: '10px',
        border: '2px solid #e9e9eb'
    },
    spanIsChecked: {
        background: '#66b3ff'

    }
};

FormInput.propTypes = {
    field: PropTypes.object,
    onChange: PropTypes.func
};

export default Radium(FormInput);
