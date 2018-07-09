import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm'
import SurveyReview from './SurveyReview';


// surveyNew = surveyForm + review
class SurveyNew extends Component {
  //equal to this.state = { new: true } in constructor
  state = { showReview: false };
  renderContent () {
    if (this.state.showReview) {
      return <SurveyReview
        onCancel={()=>this.setState({showReview: false})}
      />;
    }
    return (
      <SurveyForm
        onSurveySubmit={()=>this.setState({showReview: true})}
      />
    )
  }


  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);