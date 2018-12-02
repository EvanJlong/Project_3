import React, { Component } from 'react';
import MapContainer from './components/Map/MapRender'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import TopNavigation from './components/TopNavigation/TopNavigation';
import Login from './components/Login/Login'
import './assets/css/home.css'
import {Jumbotron, Button} from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <div>
          <TopNavigation />
          <div>
          <div id="loginz2">
          <Header /> <hr/>
          <Login />
          </div>
          <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}


