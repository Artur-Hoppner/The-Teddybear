import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Artur', age: 34 },
      { name: 'Vincent', age: 5 },
      { name: 'Aline', age: 3 },
    ],
  };
  render() {
    return (
      <div className='App'>
        <h1>React component App.js</h1>
        <button>Switch</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}
export default App;
