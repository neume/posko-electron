import React, { Component } from 'react';
import './App.css';
import SignInUseCase from './core/lib/use_cases/signInUseCase';

class App extends Component {
  state = {
    user: {
      email: ''
    }
  }
  componentDidMount() {
    let data = {account_name: 'example', email: 'posko@example.com', password: 'posko'}
    new SignInUseCase().perform(data, (result) => {
      this.setState(result.data)
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s6">
              <div className='row'>
                <div className='col s12 m6'>
                  <div className='card- blue-grey darken-1'>
                    {this.state.user.email}
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
