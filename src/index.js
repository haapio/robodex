import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import App from './Containers/App';
import './index.css';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchReducer, robotReducer } from './reducers';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({
  search: searchReducer,
  robots: robotReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
