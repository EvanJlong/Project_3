import React from 'react';
import '../Header/Header.css'
import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap'
import Login from '../Login/Login';
import logo from '../../assets/images/logo_2.png'

const Header = () => (
  <div>
<Jumbotron id="jumbotronz">
  <h1><img id="logoz" src={logo} alt={"logo"}/> Bid & Build</h1>
  <p>
    Start winning more construction bids in the DFW area today!  
    </p>
    <p>
    Login or Sign-Up to get started.
  </p>
  <div id="loginz">
  <Login />
  </div>

</Jumbotron>
</div>
);

export default Header;
