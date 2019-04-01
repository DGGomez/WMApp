import React, {Component} from "react";
import { connect } from 'react-redux';

import {Link} from "react-router-dom";

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div className="container">
      <div class="form-group">
          <div><p>Hey our product increases the strength and potentcy of the weed you grow. If that sounds good to you order some!</p></div>
          <div><Link to ="/order" className="btn btn-default btn-lg btn-block">Order</Link></div>
      </div>
      <div class="form-group">
          <div><p>already ordered?</p></div>
          <div><Link to ="/view" className="btn btn-default btn-lg btn-block">View</Link></div>
      </div>
      <div class="form-group">
          <div><p>Also here are some growing tips =D</p></div>
          <div><Link to ="/tips" className="btn btn-default btn-lg btn-block">Tips!</Link></div>
      </div>
      </div>

    );
  }
}
const mapStateToProps = ({ }) => {
};
export default connect(mapStateToProps, null)(DashboardPage);
