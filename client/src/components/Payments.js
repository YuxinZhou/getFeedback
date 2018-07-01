import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 20 email credit"
        amount={500} // 5 dollar in US
        token={token => this.props.HandleToken(token)}  // on token call back
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />

    )
  }
}

export default connect(null, actions)(Payments);