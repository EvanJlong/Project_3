import React, { Component } from 'react';
import MapContainer from './components/Map/MapRender'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home'
import TopNavigation from './components/TopNavigation/TopNavigation'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        {/* <Route exact path='/' component={Home} /> */}
          <TopNavigation />
          <Header />
          <Home />

          <Footer />
          <MapContainer />
        </div>
      </BrowserRouter>
    )
  }
}


