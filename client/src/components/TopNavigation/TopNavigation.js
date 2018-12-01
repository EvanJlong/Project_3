import React from 'react';
import Login from '../Login/Login'

class TopNavigation extends React.PureComponent {
    render() {
        console.log(this.props)
        return (
            <ul >
                <li >
                <a href = '#' >Sign Up</a>
                <a href = '#' >Sign In</a>
                <a href = '#' >Dashboard</a>

                </li>
            </ul>


        )
    }
}

export default TopNavigation;