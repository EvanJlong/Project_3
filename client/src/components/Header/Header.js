import React from 'react';
import '../Header/Header.css'
import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap'
import Login from '../Login/Login';

const Header = () => (
  <div>
<Jumbotron id="jumbotronz">
  <h1>Bid & Build</h1>
  <p>
    Start winning more construction bids in the DFW area now.  
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
