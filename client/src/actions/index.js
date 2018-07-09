// make ajax call
import axios from 'axios';
import {FETCH_USER} from "./types";

export const fetchUser = () => {
  // Redux thunk will automatically call this function with dispatch argument
  return function (dispatch) {
    axios.get('/api/current_user')
      .then(res => dispatch({
        type: FETCH_USER,
        payload: res.data
      }));
  };
};

export const HandleToken = (token) => {
  return function (dispatch) {
    axios.post('/api/stripe', token)
      .then(res => dispatch({
        type: FETCH_USER,
        payload: res.data
      }));
  };
};

export const submitSurvey = (values, history) => {
  // return { type: 'submitsurvey'};
  return function (dispatch) {
    axios.post('/api/surveys', values)
      .then(res =>
        dispatch({
          type: FETCH_USER, // update locate user data
          payload: res.data
        }));
        history.push('/surveys');
  };
};