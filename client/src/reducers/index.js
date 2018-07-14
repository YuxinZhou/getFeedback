import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer } from 'redux-form';
import surveyReducer from './surveyReducer';

// all the reducer in our app
export default combineReducers({
  auth: authReducer,
  form: reducer, // need to use key form!
  surveys: surveyReducer
});