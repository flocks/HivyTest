import React, { PropTypes } from 'react';
import Radium from 'radium';
import Foldable from './generics/Foldable';
import _ from 'lodash';

let Request = ({...props }) => {
    if (!_.isEmpty(props.request.fields) && _.isArray(props.request.fields) && props.request.fields.length > 0) {
        return (
            <Foldable title={props.request.title} date={props.request.date}>
                <div style={ style.children }>
                    {_.map(props.request.fields, (field, key) => {
                        let val = field.value;
                        if (field.type === 'date') {
                            val = val.format('LLLL');
                        }

                        return (
                            <p style={ style.row } key={ key }>
                                <strong>{ field.name }: </strong>
                                <span>{ val }</span>
                            </p>
                        );
                    })}
                </div>
            </Foldable>
        );
    }

    return (
        <Foldable title={props.request.title} date={props.request.date}>
            <p>No additional details</p>
        </Foldable>
    );
};

Request.propTypes = {
    request: PropTypes.object
};

const style = {
    children: {
        margin: '10px 0'
    },
    row: {
        margin: '0'
    }
};


Request = Radium(Request);
export default Radium(Request);
