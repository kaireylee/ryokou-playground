import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Login from  './components/login/login';
import Home from  './components/home/home';
import About from  './components/about/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/about" component={ About } />
      </BrowserRouter>      
    </div>
  );
}

export default App;
