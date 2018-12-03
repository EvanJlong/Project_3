import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import './../Login/Login.css';
import history from '../../history'
import {
  setInStorage,
  getFromStorage,
} from '../../utils/storage';


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      token: '',
      signInError: '',
      signInEmail: '',
      loggedInEmail: '',
      signInPassword: '',
  

    };

    this.newCounter = this.newCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);

    this._modifyCounter = this._modifyCounter.bind(this);

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);


    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('crane_it');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('crane_it', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            loggedInEmail: signInEmail,
            signInEmail: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('crane_it');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }
  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }


  componentDidMount() {
    fetch('/api/counters')
      .then(res => res.json())
      .then(json => {
        this.setState({
          counters: json
        });
      });
  }

  newCounter() {
    fetch('/api/counters', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        let data = this.state.counters;
        data.push(json);

        this.setState({
          counters: data
        });
      });
  }

  incrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  decrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  deleteCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}`, { method: 'DELETE' })
      .then(_ => {
        this._modifyCounter(index, null);
      });
  }

  _modifyCounter(index, data) {
    let prevData = this.state.counters;

    if (data) {
      prevData[index] = data;
    } else {
      prevData.splice(index, 1);
    }

    this.setState({
      counters: prevData
    });
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,

    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {
      return (

              <div id = "loginform" class="container">
              {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
              <form class="form-signin" onSignIn={this.onSignIn}>
                {/* {message !== '' &&
                  <div class="alert alert-warning alert-dismissible" role="alert">
                    { message }
                  </div>
                } */}
                    <h4>
    Sign-In
  </h4><br/>
                {/* <h2 class="form-signin-heading"><strong>Sign-In</strong></h2> */}
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" class="form-control" placeholder="Email"  value={signInEmail} onChange={this.onTextboxChangeSignInEmail} required/>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value={signInPassword} onChange={this.onTextboxChangeSignInPassword} required/>
                <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onSignIn} >Login</button>
                <p>
                  Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Sign Up</Link>
                </p>
              </form>
            </div>
      );
    }
    return (
      <div>
        <h3>Welcome,  {this.state.loggedInEmail}</h3>

        <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={()=>{history.push({pathname:"/dashboard", state:{user:this.state.loggedInEmail, test:"test"}})}} >Take me to my Dashboard</button>
      </div>
      
    );
  }
}

export default Login;