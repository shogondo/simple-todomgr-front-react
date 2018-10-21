import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function NavBar() {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">ToDo Mgr</Typography>
            </Toolbar>
        </AppBar>
    );
}