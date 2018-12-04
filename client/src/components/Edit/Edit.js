import React from 'react';
import axios from 'axios'


export default class EditProject extends React.Component{
  state = {
    results:[],
    editProject:{
      building_type: "",
      address:"",
      owner_developer:"",
      current_bid:0,
      status:"Bid Phase",
      geo_lat:"",
      geo_long:"",
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  
    handleInputChange = (event) => {
      let editProject = this.state.editProject
      editProject[event.target.name] = event.target.value
      console.log(event.target.name, editProject, this.state.editProject)
      this.setState({
        editProject:editProject
      })
    }

    editProject = (e) => {
      e.preventDefault();
      axios.put(`/api/buildingdata/:id`, this.state.editProject).then((response)=>{
        console.log(response)
      });
    } 

    postBug = id =>{
      console.log(this.state);
    
      axios.put(`/api/buildingdata/${id}`, this.state).then((response)=>{
        this.setState({
          building_type: "",
          address:"",
          owner_developer:"",
          current_bid:0,
          status:"Bid Phase",
          geo_lat:"",
          geo_long:"",
        })
      })
      this.handleClose();
    }

    render() {
        return (
        <div>

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Edit Bid</button>

              <div class="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle2" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle2">Edit Project</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <form >Update Bid<br />
                      <input type="text" name="current_bid" onChange = {this.handleInputChange} />
                      <br/>
                  
                </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <input onClick={this.editProject} type="submit" value="Submit" data-dismiss="modal" />
                    </div>
                  </div>
                </div>
              </div>
        </div>
        )
    
        }
    }