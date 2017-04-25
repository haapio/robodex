import {
  SET_SEARCH_TERM,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_ERROR
} from './constants';

import { apiCall } from './api/api';

export const setSearchTerm = (text) => ({
  type: SET_SEARCH_TERM,
  payload: text
});

export const requestRobots = (dispatch) => {

  dispatch({type: REQUEST_ROBOTS_PENDING})

  apiCall('https://jsonplaceholder.typicode.com/users')

    .then(response => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: response}))

    .catch(error => dispatch({type: REQUEST_ROBOTS_ERROR, payload: error}));

};
