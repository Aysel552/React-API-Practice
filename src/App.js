
import { Component } from 'react';
import './App.css';
import Avocado from './Avocado';
import Tomato from './Tomato';

class App extends Component {
  constructor(){
    super();


    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Avocado />
        <h1>Bio Products</h1>
        <Tomato />
      </div>
    )
  }
}

export default App;
      