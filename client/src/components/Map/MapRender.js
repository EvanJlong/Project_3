import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import './../Map/Map.css'

const mapStyles = {
  width: '50%',
  height: '50%'
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div class="map">
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 32.7766642, lng: -96.7969879 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={'Changing Colors Garage'}
          position={{ lat: 32.7766642, lng: -96.7969879 }}
          name={'Changing Colors Garage'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div className="container-fluid">
          <input type="checkbox" value="first checkbox" id="cb1" /> <label for="cb1">Interested</label>

            <h3>{this.state.selectedPlace.title}</h3>
            <h4>{this.state.selectedPlace.name}</h4>
            <h4>Current Status : Under Construction</h4>
            <img src="https://cdn3.iconfinder.com/data/icons/construction-7/64/Construction_icon-13-128.png"></img>
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo'
})(MapContainer);