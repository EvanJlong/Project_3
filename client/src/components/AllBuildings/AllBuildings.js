import React from 'react';
import axios from 'axios';
import './AllBuildings.css'
// import NewBuildings from '../NewBuilding/NewBuilding'
// import Card from './Card/Card';





export default class AllBuildings extends React.Component {
    state = { buildings: [] };
    // buildingz:{
    //     building_type : "",
    //     address : "",
    //     current_bid : "",
    //     status : "",
    //     geo_lat : "",
    //     geo_long : ""
    //     }
   


      // componentDidMount(){
      //   console.log(this.props)
      //   this.getAllBuildings();
      // }


      componentDidMount() {
        axios.get(`/api/buildingdata/`).then((response)=>{
          console.log(response)
          this.setState({
            buildings:response.data
            
          })
          
      })
    }

    deleteBuilding = id => {
      console.log(id);
      axios.delete(`/api/buildingdata/${id}`).then((response)=>{
          console.log(response)
      })

  }
      // getAllBuildings = () => {

      //   axios.get(`/api/buildingdata/`, ).then((response)=>{
      //     console.log(response)
          
      //     this.setState({
              
      //         // building_type : response.data[0].building_type,
      //         // address : response.data[0].address,
      //         // current_bid : response.data[0].current_bid,
      //         // status : response.data[0].status,
      //         // geo_lat : response.data[0].geo_lat,
      //         // geo_long : response.data[0].geo_long
          
      //     })
      //     console.log(this.state)
      //   });
      // }


      render() {
        const building =this.state
        console.log(building)
        const items = this.state.buildings.map(function(e){
          console.log(e._id);

          const e2 = Object.keys(e).map(function (i) {
            console.log(e2);
            
            return e[i];
            
            
          });
          return (
            <tr>
          <td key = {"building" + e._id} ><button onClick={(event) =>{ event.preventDefault(); this.deleteBuilding(this.props.building._id)}}   type="button" value= {e._id}>X</button></td>    
          <td key = {"building" + e._id} ><input type="checkbox" value= {e._id} class="Check1" /></td>    
          <td key = {"building" + e._id} >{e.building_type}</td>
          <td key = {"building" + e._id} >{e.address}</td>
          <td key = {"building" + e._id} >{e.current_bid}</td>
          <td key = {"building" + e._id} >{e.status}</td>
          
          </tr>
          )
        })
        return (
          <div className="bidz">
            
            <div className="tablez">
            <h1>My Bid List</h1>
            <table class="table-hover table-light table" >
              <thead>
                <tr>
                  <th></th>
                <th>ID</th>
              <th>Building</th>
              <th>Address</th>
              <th>Current Bid</th>
              <th>Status</th>

              </tr>
              </thead>
              {items}
            </table>
            </div>
          </div>
        );
      }
      // render() {

      //   return (
          
      //     <div className="App">
         
      //      <div>
      //      { 
      //        this.state.buildings.map((building, index) => {
      //             return (
                    
      //               <div 
      //               key={"buildings" + index} 
      //               building={building} 
                    
      //             />
                    
      //             )
      //        })
      //       }
      //     </div>
      //     </div>
      //   );
      // }
}
