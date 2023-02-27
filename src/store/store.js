import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../redux/rootReducer';

const loggerMiddleware = createLogger({});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () => {
  return createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk, loggerMiddleware)),
  );
};

export default store;
