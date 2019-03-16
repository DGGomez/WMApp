import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import DashboardPage from "./pages/MainPage";
import ReportPage from "./pages/ReportPage";

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
                <Route path="/report" exact component={ReportPage} />
                <Footer/>
            </div>
          </Router> 
        </div>
    );
  }
}

export default App;