import React, { PropTypes } from 'react';
import colors from '../../styles/colors';
import UIDate from './UIDate';
import Radium from 'radium';


class Foldable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div style={ style.base }>
                <div
                    style={ style.row }
                    onClick={this.handleClick}
                >
                    <span>{ this.props.title } </span>
                    <UIDate date={ this.props.date }  style={ style.date }/>
                </div>
                <div style={[ style.baseChildren, !this.state.visible && style.invisible,  this.state.visible && style.visible]}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

Foldable.propTypes = {
    title: PropTypes.string,
    date: PropTypes.object,
    children: PropTypes.element
};

const style = {
    base: {
        marginBottom: '10px'
    },
    date: {
        fontSize: '10px',
        fontStyle: '10px',
        float: 'right',
        marginRight: '20px'
    },
    baseChildren: {
        transition: 'max-height 200ms ease',
        overflow: 'hidden',
        background: 'white',
        cursor: 'pointer',
        paddingLeft: '20px',
        fontSize: '13px',
        boxShadow: '1px 2px 3px #dae1e7',
    },
    invisible: {
        maxHeight: '0'
    },
    visible: {
        maxHeight: '200px'
    },
    row: {
        background: colors.darkBlue,
        color: 'white',
        fontSize: '14px',
        cursor: 'pointer',
        fontWeight: 'bold',
        height: '35px',
        lineHeight: '35px',
        paddingLeft: '20px',
    }
};

export default Radium(Foldable);
