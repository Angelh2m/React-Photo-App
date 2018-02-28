import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import './App.css';

// ==================================================
//
// ==================================================

class App extends Component {
  render() {
    return (
      <div className="App">
        <List tasks={['Hello', 'One', 'two']}/>
      </div>
    );
  }
}

export default App;
