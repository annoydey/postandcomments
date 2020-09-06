import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from './components/Home/Home';
import Comments from './components/Comments/Comments';
import Notfound from './components/Notfound/Notfound';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography align='center' variant="h5" className={classes.title}>
            <a href="/home">All Posts</a>
          </Typography>
        </Toolbar>
      </AppBar>
    <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/userspost/:postId">
            <Comments></Comments>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
