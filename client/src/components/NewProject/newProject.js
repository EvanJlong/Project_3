import React from 'react';
import axios from 'axios'


export default class NewProject extends React.Component{
  state = {
    results:[],
    newProject:{
      building_type: "",
      address:"",
      owner_developer:"",
      current_bid:0,
      status:"Bid Phase",
      geo_lat:"",
      geo_long:"",
    }
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

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">New Project</button>

              <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">New Project</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <form >Building Type:<br />
                      <input type="text" name="building_type" onChange = {this.handleInputChange} />
                      <br/>
                      Address<br />
                    <input type="text" name="address" onChange = {this.handleInputChange} />
                    <br/><br/>
                    Owner / Developer<br />
                  <input type="text" name="owner_developer" onChange = {this.handleInputChange} />
                  <br/><br/>
                  
                </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <input onClick={this.newProject} type="submit" value="Submit" />
                    </div>
                  </div>
                </div>
              </div>
        </div>
        )
    
        }
    }