import React, { Component } from 'react';
import 'whatwg-fetch';
// import axios from 'axios';
// import Login from '../Login/Login'
import '../../../../client/src/assets/css/home.css'
import './../Login/Login.css';
import { Link } from 'react-router-dom';



import {
  setInStorage,
  getFromStorage,
} from '../../utils/storage';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      token: '',
      signUpError: '',
      signUpEmail: '',
      loggedInEmail: '',
      signUpPassword: '',

    };

    this.newCounter = this.newCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);

    this._modifyCounter = this._modifyCounter.bind(this);

    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
 


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

  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
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

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }
  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
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
      signUpEmail,
      signUpPassword,
      signUpError,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {
      return (

        <div id = "signupform" class="container">
        {
        (signUpError) ? (
          <p>{signUpError}</p>
        ) : (null)
      }
        <form class="form-signup" onSignUp={this.onSignUp}>
          {/* {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          } */}
              <h4>
Sign-Up
</h4><br/>
          {/* <h2 class="form-signin-heading"><strong>Sign-In</strong></h2> */}
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email"  value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onSignUp} >Submit</button>


        </form>
      </div>
////////////////////////////////////////////////////////////////////

        // <div>
        //   <br />
        //   <br />
        //   <div>
        //     {
        //       (signUpError) ? (
        //         <p>{signUpError}</p>
        //       ) : (null)
        //     }
        //     <p>Sign Up</p>
        //     <input
        //       type="email"
        //       placeholder="Email"
        //       value={signUpEmail}
        //       onChange={this.onTextboxChangeSignUpEmail}
        //     /><br />
        //     <input
        //       type="password"
        //       placeholder="Password"
        //       value={signUpPassword}
        //       onChange={this.onTextboxChangeSignUpPassword}
        //     /><br />
        //     <button onClick={this.onSignUp}>Sign Up</button>
        //   </div>
        // </div>




        






















      );
    }
    return (
      <div>
        <p>Welcome,  {this.state.loggedInEmail}</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default SignUp;



