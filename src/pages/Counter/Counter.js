import React, {Component} from 'react';
import {increment, decrement, reset} from 'actions/counter';

import './index.css';

import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        const boxStyle = {
            display: 'flex'
        }
        return (
            <div className = 'counter-box'>
                <div>当前计数为{this.props.counter.count}</div>
                <div style = { boxStyle }>
                    <button onClick={() => this.props.increment()}>自增</button>
                    <button onClick={() => this.props.decrement()}>自减</button>
                    <button onClick={() => this.props.reset()}>重置</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);