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
      <div className="dashboard__container">
        <div className="profile__container">
          <div><p>Hey our product increases the strength and potentcy of the weed you grow. If that sounds good to you order some!</p></div>
          <div><br/><Link to ="/order" className="btn btn-default btn-lg btn-block">Order</Link><br/></div>
          <div><p>already ordered?</p><Link to ="/view" className="btn btn-default btn-lg btn-block">View</Link></div>
          <div><p>Also here are some growing tips =D<Link to ="/tips" className="btn btn-default btn-lg btn-block">Tips!</Link></p></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ }) => {
};
export default connect(mapStateToProps, null)(DashboardPage);
