import React, { Component } from 'react';
import MapContainer from '../components/Map/MapRender'
import NewProject from '../components/NewProject/newProject'
import EditProject from '../components/Edit/Edit'
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios'
import AllBuildings from '../components/AllBuildings/AllBuildings';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import './Dashboard.css'


export default class Dashboard extends Component {

  state = {
    results:[],
    newProject:{
      building_type: "",
      address:"",
      owner_developer:"",
      current_bid:0,
      status:"Bid Phase",
      loggedInEmail: '',
    },
    
  }

  componentDidMount(){
    console.log(this.props, this.props.location.state.user)
    this.getUserBuildings();
    // this.getAllBuildings();
  }

  getUserBuildings = () =>{
    axios.get(`/api/buildingdata/${this.props.location.state.user}`).then((response)=>{
      console.log(response)
    });
  }


  // getAllBuildings = () =>{
  //   axios.get(`/api/buildingdata/`).then((response)=>{
  //     console.log(response)
  //   });
  // }

  render() {
    return (
      <div id="div">

        <NewProject/>
        {/* <EditProject/> */}
        <div id="buildingz">
        <AllBuildings />

      </div>      
      <div id="modalz"></div>
        <div>

          <div>
              <MapContainer />
          </div>
        </div>
        
        </div>
    )
  }
}