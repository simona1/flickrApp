import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

window.Store = Store;

export default Store;
