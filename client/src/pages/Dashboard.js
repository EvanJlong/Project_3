import React, { Component } from 'react';
import MapContainer from '../components/Map/MapRender'
import Footer from '../components/Footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// import TopNavigation from '../components/TopNavigation/TopNavigation';


export default class Dashboard extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <div>
          {/* <TopNavigation /> */}
          <div>
              <MapContainer />
           <hr/>
          <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}


