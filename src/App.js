// import logo from './logo.svg';
import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click= {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key =  {person.id}
              changed = {(event) => this.nameChangeHandler(person.id)}
            />
          })}
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = []
    if (this.state.persons.length <= 2) classes.push('red')
    if (this.state.persons.length <= 1) classes.push('bold')

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes. join(' ')}>This is really working!</p>
        <button
          style={style}
          // onClick={() => switchNameHandler('Maxiliamm!!!')}
          onClick={this.tooglePersonsHandler}
        >
          Toogle Persons
        </button>
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

export default Radium(App);
