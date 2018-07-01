import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2> Dashboard </h2>;
const SurveyNew = () => <h2> Survey </h2>;


class App extends Component {
  componentDidMount(){ // live cycle method
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        {/*only allow one child*/}
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/surveys" component={Dashboard}/>
            <Route path="/surveys/new" component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  };
}
// make actions to be App's props
export default connect(null, actions)(App);
