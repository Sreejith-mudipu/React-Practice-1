import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddUser from './components/users/AddUser';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route exact path="/about" component ={About} />
          <Route exact path="/contact" component ={Contact} />
          <Route exact path="/user/add" component ={AddUser} />
          <Route component ={NotFound} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
