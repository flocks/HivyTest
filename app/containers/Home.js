import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions';
import colors from '../styles/colors';
import Radium from 'radium';
import UIButton from '../components/generics/UIButton';
import Request from '../components/Request';
import _ from 'lodash';
// import utils from '../utils/utils';


const Home = ({onModal, requests}) => {
    return (
        <div style={style.base}>
            <UIButton
                onClick={() => onModal('addProduct', {} )}
                label="Request a product"
                kind="blue"
            />

            <h3 style={ style.title }>Last requests</h3>

            {_.map(requests, (request) => {
                return (
                    <Request key={request.id} request={request} />
                );
            })}

        </div>
    );
};

Home.propTypes = {
    products: PropTypes.array,
    requests: PropTypes.array,
    onModal: PropTypes.func,
};

Home.defaultProps = {
    products: []
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        requests: state.requests
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onModal: (modalId, data) => dispatch(openModal(modalId, data))
    };
};

const style = {
    base: {
        margin: '50px auto',
        width: '50%'
    },
    title: {
        color: colors.grey
    }

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Radium(Home));
