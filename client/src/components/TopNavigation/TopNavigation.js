import React from 'react';

import { Nav,  NavItem } from 'react-bootstrap';
import '../TopNavigation/TopNavigation.css'
import Dashboard from '../../pages/Dashboard'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// export default class TopNavigation extends React.Component {
    
//   render() {
      
//     return (
//       <Nav>
//           <NavItem eventKey={1} href="/">HOME</NavItem>
//           <NavItem eventKey={2} href="#">SIGN-UP</NavItem>
//           <NavItem eventKey={3} href="/Dashboard">Dashboard</NavItem>

//        </Nav>


//     )
//   }
// }


export default class TopNavigation extends React.Component {
    
  render() {
      
    return (
      <BrowserRouter>
      <div>
        
      <Switch>
          <Nav>
            <Link to={`/Dashboard`} >DASHBOARD</Link>
          </Nav>
        <Route exact path='/Dashboard' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>


    )
  }
}