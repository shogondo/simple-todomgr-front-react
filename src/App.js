import Login from './Login/Login.component';
import NavBar from './NavBar/NavBar.component';
import React from 'react';
import Route from 'react-router/Route';
import Switch from 'react-router/Switch';
import Top from './Top/Top.component';

export default function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Top}/>
                <Route path="/login" render={Login}/>
            </Switch>
        </div>);
}
