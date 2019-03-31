import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/order">Order</Link>
                <Link to="/tips">Tips</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/order">Order</Link>
                <Link to="/tips">Tips</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
    </Layout>
</div>
        );
    }
}

export default connect(null)(NavBar);