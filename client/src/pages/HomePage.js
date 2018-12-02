import React, { Component } from 'react';
import MapContainer from './components/Map/MapRender'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Login from './../components/Login/Login'

export default class HomePage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          {/* <Header /> */}
          {/* <Home /> */}
          <Login />
          <Footer />
          {/* <MapContainer /> */}
        </div>
      </BrowserRouter>
    )
  }
}


