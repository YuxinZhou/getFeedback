import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

import Dashboard from './Dashboard';

import SurveyNew from './surveys/SurveyNew';


class App extends Component {
  componentDidMount(){ // live cycle method
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        {/*only allow one child*/}
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/survey/new" component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  };
}
// make actions to be App's props
export default connect(null, actions)(App);
