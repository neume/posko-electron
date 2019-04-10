import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s6">
              Card
              <div className='row'>
                <div className='col s12 m6'>
                  <div className='card- blue-grey darken-1'>
                    <span className='card-content white-text'> Card Title</span>
                    <p> Hello</p>
                  </div>
                  <div className='card-action'>
                    <a href='#'> This is a link </a>
                    <a href='#'> This is a link </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
