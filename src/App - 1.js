import logo from './logo.svg';
import './App.css';
import myImage from "./myImage.jpg";
import React, { useState, useEffect } from 'react';




class App extends React.Component {
  State ={
  Person = {
    fullNama:"Amin" ,
    image :myImage,
    profession  : "Développeur"
  },
show =true,
seconds =0
}
handleClick=()=>show===true? this.State.Person.show():0

  componentDidMount = () => {
  const [seconds, setSeconds] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
       setSeconds(seconds += seconds + 1);
      } ,1000);
    return () => show(interval);
  }, []);
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
      <button onClick={this.handleClick}>"Click me"</button>
      <div>
        {interval} seconds have elapsed since mounting.
      </div>
        //  <h1> {this.state.fullName,this.state.image,this.state.profession} </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

 } 
}
// APP,propTypes={
//   booleanProps =PropTypes.boolean
// }
export default App;
