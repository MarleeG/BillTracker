import React, { Component } from 'react';
import Form from './components/form';

class App extends Component {
  state = {
      he: 'hello'
    }

    
  render() {
    
    return (
      <div>
        <h1>{this.state.he}</h1>
        <Form />
      </div>
    );
  }
}

export default App;
