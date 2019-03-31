import React, {Component} from "react";
import { connect } from 'react-redux';


class SuccessPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="dashboard__container">
        <div className="profile__container">
          <div className="profile-body__container"><h1>Hi I don't have any tips...sorry</h1></div>
          <div><p>You're Order has been placed here is your order number:</p></div>
        </div>
      </div>
    );
  }
}

export default connect(null)(SuccessPage);