import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { closeModal, closeLastModal, createRequest } from '../actions';
import AddProductRequest from '../components/modals/AddProductRequest';
import Radium from 'radium';
import modalContainerBinding from '../components/decorators/modalContainerBinding';

const ModalsContainer = ({ modals, onCloseModal, onCreateRequest }) => {
    const modalsComponents = [];

    _.each(modals, (modal) => {
        switch (modal.modalId) {
            case 'addProduct':
                const AddProduct = (
                    <AddProductRequest
                        closeModal={() => onCloseModal('addProduct')}
                        createRequest={(request) => onCreateRequest(request) }
                        key="addProduct"
                    />
                );
                modalsComponents.push(AddProduct);
                break;
            default:
        }
    });

    if (modals.length === 0) {
        return false;
    }

    return (
        <div style={style.base}>
            {modalsComponents}
        </div>
    );
};

ModalsContainer.propTypes = {
    modals: PropTypes.array,
    onCloseModal: PropTypes.func,
    onCreateRequest: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        modals: state.modals
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseModal: (modalId) => dispatch(closeModal(modalId)),
        closeLastModal: () => dispatch(closeLastModal()),
        onCreateRequest: (request) => dispatch(createRequest(request))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Radium(modalContainerBinding(ModalsContainer)));


const style = {
    base: {
        position: 'absolute',
        background: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        top: '0',
        zIndex: '1',
        height: '100%'
    }
};
