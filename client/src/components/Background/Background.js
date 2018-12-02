'use strict';

import React, {Component} from 'react';
import '../Background/Background.css'
class Example extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://ak3.picdn.net/shutterstock/videos/23419333/preview/stock-footage-construction-site-at-night-time-lapse-working-tower-cranes-buildings-and-traffic.webm'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Example;