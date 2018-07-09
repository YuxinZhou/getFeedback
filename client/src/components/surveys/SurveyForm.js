import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';

class SurveyForm extends Component {
  render() {
    return (
      <div style={{margin: '40px'}}>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <div>
            <Field type="text" name="title" label="Survey Title" component={SurveyField}/>
          </div>
          <div>
            <Field type="text" name="subject" label="Email Subject" component={SurveyField}/>
          </div>
          <div>
            <Field type="text" name="body" label="Email Body" component={SurveyField}/>
          </div>
          <div>
            <Field type="text" name="recipients" label="Recipients List" component={SurveyField}/>
          </div>
          <Link to="/surveys" className="yellow btn-flat darken-3 white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    // redux-form will match the error to the field
    errors.title = 'Title can not be empty';
  }
  if (!values.subject) {
    errors.subject = 'Email subject can not be empty';
  }

  errors.recipients = validateEmail(values.recipients || '');

  return errors

}

// adding addition props to SurveyForm, e.g. handleSubmit
export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount:false
})(SurveyForm);