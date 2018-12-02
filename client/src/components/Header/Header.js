import React from 'react';
import '../Header/Header.css'
import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap'
import Login from '../Login/Login';
import logo from '../../assets/images/logo_2.png'

const Header = () => (
  <div>
<div id="jumbotronz">
  <h1 id="big"><img id="logoz" src={logo} alt={"logo"}/> Bid & Build</h1>
  <h3>
    Start winning more construction bids in the DFW area today!  
    </h3>

  {/* <div id="loginz">
  <Login />
  </div> */}

</div>
</div>
);

export default Header;
