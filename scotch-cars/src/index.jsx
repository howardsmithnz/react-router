// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, browserHistory} from 'react-router';

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('container')
);