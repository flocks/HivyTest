import React, { PropTypes } from 'react';
import Radium from 'radium';
import { zoomIn } from 'react-animations';
import modalBinding from '../decorators/modalBinding';
import { Creatable } from 'react-select';
import UIButton from '../generics/UIButton';
import FormInput from '../generics/FormInput';
import '../../styles/react-select.css';
import colors from '../../styles/colors';
import productsList from '../../utils/productsList';
import _ from 'lodash';
import moment from 'moment';

const options = [];

_.map(productsList, (product) => {
    options.push({
        value: product.id,
        label: product.name
    });
});


class AddProductRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            fields: []
        };

        this.onProductChange = this.onProductChange.bind(this);
        this.submit = this.submit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }


    onProductChange(choice) {
        const product = _.find(productsList, { id: choice.value });
        let fields = [];
        if (product) {
            fields = _.cloneDeep(product.fields);
            _.map(fields, (field) => {
                field.value = null;

                if (field.type === 'date') {
                    field.value = moment();
                }
            });
        }

        this.setState({
            product: choice,
            fields: fields
        });
    }

    onFieldChange(val, field) {
        const copyStateFields = this.state.fields;
        const findField = _.find(copyStateFields, { name: field.name });

        if (findField) {
            findField.value = val;
        }

        this.setState({
            fields: copyStateFields
        });
    }

    submit() {
        this.props.createRequest({title: this.state.product.label, date: new Date(), fields: this.state.fields });
        this.props.closeModal();
    }

    render() {
        const valueToNull = _.filter(this.state.fields, (field) => {
            return (_.isNull(field.value));
        });


        const isSubmitable = (valueToNull.length === 0 && this.state.product.label);

        return (
            <div style={style.base}>
                <h3 style={ style.title }>What do you need?</h3>
                <Creatable
                    name="form-field-name"
                    value={ this.state.product.value }
                    placeholder="choose a product"
                    options={options}
                    onChange={this.onProductChange}
                />

                {_.map(this.state.fields, (field, key) => {
                    return (<FormInput key={ key } field={ field } onChange={ this.onFieldChange} />);
                })}

                <div style={style.footer}>
                    <UIButton
                        onClick={this.submit}
                        label="Create a new request"
                        kind="blue"
                        disabled={ !isSubmitable }
                        style={[style.submit, isSubmitable && style.submitable]}
                    />
                    <UIButton
                        onClick={ this.props.closeModal }
                        label="Cancel"
                        kind="cancel"
                        style={style.cancel}
                    />
                </div>
            </div>
        );
    }
}

AddProductRequest.propTypes = {
    closeModal: PropTypes.func,
    createRequest: PropTypes.func
};


const style = {
    base: {
        background: 'white',
        borderRadius: '4px',
        boxShadow: '1px 2px 10px #b3b3b3',
        width: '600px',
        padding: '15px',
        position: 'relative',
        margin: '200px auto',
        animation: 'x 200ms',
        animationName: Radium.keyframes(zoomIn, 'zoomIn'),
        '@media (maxWidth: 600px)': {
            width: '100%',
            margin: '70px auto'
        }
    },
    title: {
        fontSize: '15px',
        margin: '0 0 10px 3px',
        color: colors.grey,
        textTransform: 'uppercase'
    },
    footer: {
        position: 'relative',
        marginTop: '30px'
    },
    submit: {
        position: 'absolute',
        right: '0',
        opacity: '0.2',
        display: 'block'
    },
    submitable: {
        opacity: '1'
    },
    cancel: {
        display: 'block'
    },
    close: {
        position: 'absolute',
        cursor: 'pointer',
        top: '50%',
        right: '36px',
        marginTop: '-16px',
        width: '32px'
    }
};

export default modalBinding(Radium(AddProductRequest));
