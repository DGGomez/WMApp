import React, {Component} from "react";
import {Button, FormGroup, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';


class TipsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { report } = this.props;
    return (
      <div className="dashboard__container">
        <div className="profile__container">
          <div className="profile-body__container"><h1>Hi I don't have any tips...sorry</h1></div>
          <div><p>I unno</p></div>
        </div>
      </div>
    );
  }
}

export default connect(null)(TipsPage);
