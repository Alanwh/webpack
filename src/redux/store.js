// import {createStore, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import combineReducers from './reducers.js';

// let store = createStore(combineReducers,applyMiddleware(thunkMiddleware));

// export default store;

import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';

import promiseMiddleware from './middleware/promiseMiddleware'

if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

export default store;