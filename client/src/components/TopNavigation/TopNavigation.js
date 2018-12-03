import React from 'react';

import { Nav,  NavItem } from 'react-bootstrap';
import '../TopNavigation/TopNavigation.css'
import { Link} from 'react-router-dom';

export default class TopNavigation extends React.Component {
    
  render() {
      
    return (
      <div>
          <Nav>
          <Link to={`/`} >Home</Link>
          <Link to={`/Dashboard`} >DASHBOARD</Link>
          </Nav>
      </div>
    )
  }
}