import React, { Component } from 'react';
// import MapContainer from './components/Map/MapRender'
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Router, Route, Link, Switch } from 'react-router-dom';
// import Home from './components/Home/Home'
import TopNavigation from './components/TopNavigation/TopNavigation';
import Login from './components/Login/Login'
import './assets/css/home.css'
// import {Jumbotron, Button} from 'react-bootstrap'
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import Dashboard from './pages/Dashboard';
import history from './history'



export default class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div>
        <TopNavigation/>
        <Footer />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Dashboard' component={Dashboard} />
      </Switch>
      </div>
      
      </Router>
      
    )
  }
}


