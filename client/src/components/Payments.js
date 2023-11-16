import { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500} //Amount is in cents
        token={(token) => this.props.handleToken(token)} //This is the token Stripe sends back after authorizing the operation, not before. It's an object that contains the information of the purchase with all the data from the user that tried to purchase something. With the handleToken function we are making a request to the back end.
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
