import React from 'react';


import '../TopNavigation/TopNavigation.css'
import { Link} from 'react-router-dom';

export default class TopNavigation extends React.Component {
    
  render() {
      
    return (
      <div>
          <nav class = "navbar">
          <a class="navbar-brand" href="/"><Link to={`/`} >BID & BUILD</Link></a>
          <a class="navbar-brand" href="/dashboard"><Link to={`/dashboard`} >DASHBOARD</Link></a>
          </nav>
      </div>
    )
  }
}