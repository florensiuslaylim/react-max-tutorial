import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// import logo from './logo.svg';
// import React, { useState } from 'react';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'asd211', name: 'Max', age: 28 },
      { id: 'asd212', name: 'Manu', age: 29 },
      { id: 'asd213', name: 'Tabuti', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    // const person = Object.assign({}, this.state.persons[personIndex])

    this.setState({persons: persons})
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  
  render () {
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonsHandler} />
        {persons}
      </div>
    )
  }
}

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Tabuti', age: 21 }
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   });

//   // console.log(personsState)

//   const switchNameHandler = (newName) => {
//     setPersonsState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Tabuti', age: 27 },
//       ],
//       otherState: personsState.otherState
//     });
//   };

//   const nameChangeHandler = (event) => {
//     setPersonsState({
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: event.target.value, age: 29 },
//         { name: 'Tabuti', age: 26 },
//       ],
//       otherState: personsState.otherState
//     });
//   };

//   const tooglePersonsHandler = () => {
//     const doesShow = personsState.showPersons
//     console.log(doesShow)
//     setPersonsState({ showPersons: !doesShow })
//     console.log(personsState.showPersons)
//   }

//   const style = {
//     backgroundColor: 'white',
//     font: 'inherit',
//     border: '1px solid blue',
//     padding: '8px',
//     cursor: 'pointer'
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <button
//         style={style}
//         // onClick={() => switchNameHandler('Maxiliamm!!!')}
//         onClick={tooglePersonsHandler}
//       >
//         Toogle Persons
//       </button>
//       {
//         personsState.showPersons ? 
//         <div>
//           <Person
//             name={personsState.persons[0].name}
//             age={personsState.persons[0].age} 
//           />
//           <Person
//             name={personsState.persons[1].name}
//             age={personsState.persons[1].age}
//             click={switchNameHandler.bind(this, 'Max!!')}
//             changed={nameChangeHandler}
//           >
//             My hobby: Swimming
//           </Person>
//           <Person
//             name={personsState.persons[2].name}
//             age={personsState.persons[2].age} 
//           />
//         </div> : null
//       }
//     </div>
//   );
//   // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Did this work?'))
// }

export default App;
