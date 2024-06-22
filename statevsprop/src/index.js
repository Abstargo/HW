import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const Fruit = (props) => {

  return (
    <div className='fruit'>
      <h1> List of  Fruits</h1>
      <p>Name: {props.fruits.name}</p>
      <p>Color: {props.fruits.color}</p>
    </div>
  )
}

class Car extends Component {
  constructor(){
    super()
    this.state = {
      car: 'Ferrari'
    }
  }

  changeMessage() {
    this.setState({
      car: 'Jaguar'
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.car}</h1>
        <button onClick={() => this.changeMessage()}>
          Change</button>
      </div>
    )
  }
}

function App() {
  const fruits = 
  {
    name: "Mango",
    color: "Yellow"
  }

  return (
    <div className="App">
      <Fruit fruits={fruits}/>
      <hr></hr>
      <Car />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

