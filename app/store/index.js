import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// Store設定、Middleware設定
const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    return createStore(reducers, initialState, enhancer);
}

// initialStateは{}
const store = configureStore({});

export default store;
