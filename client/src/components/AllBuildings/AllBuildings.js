import React from 'react';
import axios from 'axios';

export default class AllBuildings extends React.Component {
    state = {
    buildingz:[

    ]
    }


      componentDidMount(){
        console.log(this.props)
        this.getAllBuildings();
      }



      getAllBuildings = () => {

        axios.get(`/api/buildingdata/`, ).then((response)=>{
          console.log(response)
          
          this.setState({
              buildingz:response.data
          })
          console.log(this.state.buildingz)
        });
      }


render() {
    return ( 
        <div>
    
        this.state.buildingz.map((buildingz,index) => {
            
            <div class="card">
                <div class="card-body">
                    {this.state.buildingz.building_type}

                </div>
            </div>
        }
    )
        </div>
    
    

    )   
}




}
