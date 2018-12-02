import React, { Component } from 'react';
import MapContainer from './components/Map/MapRender'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import TopNavigation from './components/TopNavigation/TopNavigation';

export default class SignUp extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <div>
          <TopNavigation />
          <div>

          <Header />

          <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}