import React from 'react';
import Login from '../Login/Login'

import '../TopNavigation/TopNavigation.css'
import {Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';



export default class TopNavigation extends React.Component {
    
    render() {
        
      return (
        <Nav>
            <NavItem eventKey={1} href="#">HOME</NavItem>
            <NavItem eventKey={2} href="#">SIGN-UP</NavItem>
            <NavItem eventKey={2} href="#">LOGIN</NavItem>
        </Nav>
      )
    }
  }