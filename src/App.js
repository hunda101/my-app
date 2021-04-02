// import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: [0, 1, 2, 3, 4, 5 ,6, 7, 8]
    }
  }
clicker = event =>{
 
}  
   render() {
    return (
  
        <div className = "Box">
          <div  className ="Box-square" onClick={this.clicker} data = "0">{this.state.squares[0]}</div>
          <div className ="Box-square" onClick={this.clicker} data = "1" >{this.state.squares[1]}</div>
          <div data = "2" className ="Box-square" onClick={this.clicker}>{this.state.squares[2]}</div>
          <div data = "3" className ="Box-square" onClick={this.clicker}>{this.state.squares[3]}</div>
          <div data = "4" className ="Box-square" onClick={this.clicker}>{this.state.squares[4]}</div>
          <div data = "5" className ="Box-square" onClick={this.clicker}>{this.state.squares[5]}</div>
          <div data = "6" className ="Box-square" onClick={this.clicker}>{this.state.squares[6]}</div>
          <div data = "7" className ="Box-square" onClick={this.clicker}>{this.state.squares[7]}</div>
          <div data = "8" className ="Box-square" onClick={this.clicker}>{this.state.squares[8]}</div>
          
          
          
         </div>
    
  );
}
}
export default App;
