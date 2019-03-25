import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import DashboardPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import TipsPage from "./pages/TipsPage";
import ViewOrderPage from "./pages/ViewOrderPage";
import PaymentPage from "./pages/PaymentPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogOutPage"
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="container">
          <Router>
            <div style={{ marginTop: '7rem' }}>
                <NavBar />
                <Route path="/" exact component={DashboardPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
                <Route path="/pay" exact component={PaymentPage} />
                <Route path="/order" exact component={OrderPage} />
                <Route path="/view" exact component={ViewOrderPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/logout" exact component={LogoutPage} />
                <Route path="/tips" exact component={TipsPage} />
                <Footer/>
            </div>
          </Router> 
        </div>
    );
  }
}

export default App;