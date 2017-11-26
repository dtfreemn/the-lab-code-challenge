import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div><img id='main-img' src={require('./images/main-image.jpg')} alt='main-image'/></div>
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
