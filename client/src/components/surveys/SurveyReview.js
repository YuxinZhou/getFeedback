import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {submitSurvey} from "../../actions/index";
import { withRouter } from 'react-router-dom';

// unpack {onCancel, formValues, submitSurvey} from props
const SurveyReview = ({onCancel, formValues, submitSurvey, history}) => {
  return (
    <div style={{margin: '40px'}}>
      <div style={{marginBottom: '20px'}}>
        <div>
          <label>Survey Title</label>
          <div>{formValues.title}</div>
        </div>
        <div>
          <label>Email Subject</label>
          <div>{formValues.subject}</div>
        </div>
        <div>
          <label>Email Body</label>
          <div>{formValues.body}</div>
        </div>
        <div>
          <label>Recipients List </label>
          <div>{formValues.recipients}</div>
        </div>
      </div>
      <button
        className="yellow btn-flat darken-3 white-text"
        onClick={onCancel}
      >Cancel</button>
      <button
        className="teal btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      > Submit
        <i className="material-icons right"> email</i>
      </button>

    </div>
  )

};

// take redux states to send down to component
function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));