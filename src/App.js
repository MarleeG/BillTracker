import React, { Component } from 'react';
import Form from './components/form';
import './App.css'

class App extends Component {
  state = {
    title: 'Track Bills',
    bills: []
  }


  render() {

    return (
      <div className='app-body'>
        <h1 className='text-center title'>{this.state.title}</h1>
        <Form bills={this.state.bills}/>
      </div>
    );
  }
}

export default App;
