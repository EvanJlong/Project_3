import React from 'react';
import axios from 'axios';

export default class AllBuildings extends React.Component {
state = {

}


allBuildings = (e) => {
    e.preventDefault();

    axios.get(`/api/buildingdata/`, this.state.newProject).then((response)=>{
      console.log(response)
    });
  }




render() {
    return (
    <div>
hello
    </div>
    )
    }
}