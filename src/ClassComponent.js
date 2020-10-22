/* React använder JSX för att enkelt kunna kompilera kod utan att behöva skriva koden som nedan under exempel 1 */
/* className används eftersom det är JSX och class är redan paxat av vanligt html. Det översätts i webläsaren till class och inte className  */
import React, { Component } from 'react';
import './App.css';

class ClassComponent extends Component {
  render() {
    // return (
    //   <div className='App'>
    //     <h1>React component App.js</h1>
    //   </div>
    // );

    /***********************/
    /***** EXEMPEL 1 ******/
    /*********************/
    /***** Skapar elementen manuellt nedan ******/
    return React.createElement(
      'div',
      null,
      React.createElement('h1', { className: 'App' }, 'React component App.js')
    );
  }
}

export default ClassComponent;
