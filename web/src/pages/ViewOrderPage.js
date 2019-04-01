import React, {Component} from "react";
import {Button, FormGroup, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';

import { readData } from '../actions';
import Card from '../components/Card';
import { isNumber } from "util";

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      yourLocation: ""
        };
  }

  componentWillReceiveProps(nextProps) {
    console.log('reveive props: ', nextProps);
    const { readData, order } = nextProps;
    if(order === undefined) {
      this.setState({ loading: true });
      readData({ location: this.state.yourLocation },
        () => this.setState({ loading: false })
      );
    }
  }

  renderReport = () => {
    const { order } = this.props;
    const { loading } = this.state;
    if(loading) {
      return (
        <div>
          ...loading
        </div>
      );
    } else {
      if(order !== undefined) {
        return (
            <div className="container">
              <div className="heading__container">
                Order Info
              </div>
              <div className="body__container">

              </div>
          </div>
        );
     } else {
       return (
         <div>
           No Orders :D
         </div>
       );
     }
    }
  }
  
  validateForm() {
    return this.state.yourLocation.length > 1;
  }
  
  onSubmit = e => {
    e.preventDefault();
    const { yourLocation } = this.state;
    this.setState({ loading: true });
    this.setState({ loading: false });
  };
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderForm = () => {
    const { loading } = this.state;
    if(loading) {
      return (
        <div>
          ...loading
        </div>
      );
    } else {
      return (
        <div className="preference__container">
          <div className="preference-heading__container">
            Location
          </div>
          <div className="preference-body__container">
            <form onSubmit={this.onSubmit}>
                <FormGroup controlId="yourLocation" bsSize="large">
                  <div>What location do you want to see?</div>
                  <FormControl
                    value={this.state.yourLocation}
                    onChange={this.handleChange}
                    type="string"
                  />
                </FormGroup>
                <Button
                  block
                  bsSize="large"
                  type="submit"
                  disabled={!this.validateForm()}
                >
                  Submit
                </Button>
              </form>
          </div>
        </div>
      );
    }
  }
  render() {
    const { order } = this.props;
    return (
      <div className="dashboard__container">
        <div className="profile__container">
        </div>
        {order !== undefined ? this.renderReport() : this.renderForm() }
      </div>
    );
  }
}

export default connect(null, { readData })(DashboardPage);
