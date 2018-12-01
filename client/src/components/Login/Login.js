import React from 'react';
import 'whatwg-fetch';
// import axios from 'axios';



import {
  setInStorage,
  getFromStorage,
} from '../../utils/storage';

export default class Login extends React.Component {
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
            <div>
              <div>
                {
                  (signInError) ? (
                    <p>{signInError}</p>
                  ) : (null)
                }
                <p>Sign In</p>
                <input
                  type="email"
                  placeholder="Email"
                  value={signInEmail}
                  onChange={this.onTextboxChangeSignInEmail}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={signInPassword}
                  onChange={this.onTextboxChangeSignInPassword}
                />
                <br />
                <button onClick={this.onSignIn}>Sign In</button>
              </div>
              

        return (
          <div>
            <p>Welcome,  {this.state.loggedInEmail}</p>
            <button onClick={this.logout}>Logout</button>
          </div>
          </div>
        );
      }
    }
    
    
}