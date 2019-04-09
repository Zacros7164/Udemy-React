import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons : [
      {id: "asdasdasd", name: "Max", age: 28},
      {id: "aghgfhfghfg", name: "Manu", age: 29},
      {id: "adfgsdfg", name: "Stephanie", age: 26}
    ],
  
    otherState: 'some other value',
    showPersons: false,

  };

  

  nameChangedHandler = (event, id )=>{
    
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex)=>{
    const persons1 = [...this.state.persons]
    persons1.splice(personIndex, 1);
    this.setState({
      persons: persons1
    });

  }

  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons;

    this.setState({showPersons: !doesShow});
  }

  render (){
    const style = {
      backgroundColor: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    }
    

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
            key={person.id}
            click={()=> this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            changed={(event)=> this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return(
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    )
  };
}

export default App;



