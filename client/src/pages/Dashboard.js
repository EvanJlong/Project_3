import React, { Component } from 'react';
import MapContainer from '../components/Map/MapRender'
import NewProject from '../components/NewProject/newProject'
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios'



export default class Dashboard extends Component {
  
  state = {
    results:[],
    newProject:{
      building_type: "",
      address:"",
      owner_developer:"",
      current_bid:0,
      status:"Bid Phase"
    }
  }
  componentDidMount(){
    console.log(this.props, this.props.location.state.user)
    this.getUserBuildings();
  }
  getUserBuildings = () =>{
    axios.get(`/api/buildingdata/${this.props.location.state.user}`).then((response)=>{
      console.log(response)
    });
  }
  handleInputChange = (event) => {
    let newProject = this.state.newProject
    newProject[event.target.name] = event.target.value
    console.log(event.target.name, newProject, this.state.newProject)
    this.setState({
      newProject:newProject
    })
  }
  newProject = (e) => {
    e.preventDefault();
    axios.post(`/api/buildingdata/`, this.state.newProject).then((response)=>{
      console.log(response)
    });
  }



  render() {
    return (
      <div>
        <NewProject/>
        <div id="bidz">
      </div>      
      <div id="modalz"></div>
        <div>
          {/* <TopNavigation /> */}
          <div>
              <MapContainer />
           <hr/>

          </div>
        </div>
        
        </div>
    )
  }
}