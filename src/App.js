import React, { Component } from 'react';
import './App.css'
import Header from './header'
import Footer from './footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
