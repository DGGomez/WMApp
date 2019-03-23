import React, {Component} from "react";
import {Button, FormGroup, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';


class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  myClick(){
    const { history } = this.props;
    this.props.history.push("/view")
  }
  myClick2(){
    const { history } = this.props;
    this.props.history.push("/order")
  }
  myClick3(){
    const { history } = this.props;
    this.props.history.push("/tips")
  }

  render() {
    const { report } = this.props;
    return (
      <div className="dashboard__container">
        <div className="profile__container">
          <div className="profile-body__container"><h1>Welcome to Weed Soil(name pending)</h1></div>
          <div><p>Hey our product increases the strength and potentcy of the weed you grow. If that sounds good to you order some!</p></div>
          <div><button onClick={this.myClick2}>Order</button></div>
          <div><p>already ordered?</p><button onClick={this.myClick}>View</button></div>
          <div><p>Also here are some growing tips =D<button onClick={this.myClick3}>Tips!</button></p></div>
        </div>
      </div>
    );
  }
}

export default connect(null)(DashboardPage);
