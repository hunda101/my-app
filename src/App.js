// import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
      [0, 4, 8],
      [2, 4, 6],
      
      
      
    ]
  }
  winnerSelect = () => {
  let selecter = (this.state.count % 2 === 0) ? <div className="X">X</div> : <div className="X">O</div>
  // selecter.forEach((i)=>{
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if(this.state.squares[line[0]] === selecter && 
          this.state.squares[line[1]] === selecter &&
          this.state.squres[line[2]] === selecter
        ){
          alert(selecter + "win");
      }
      
    }
    
  // })
}
clicker = event =>{
  let data = event.target.getAttribute("data");
  let currentSquares = this.state.squares; 
  console.log(currentSquares)
  if(currentSquares[data] === null){
    currentSquares[data] = (this.state.count % 2 === 0) ? <div className="X">X</div> : <div className="X">O</div>;
    this.setState({ count: this.state.count + 1})
    this.setState({squares: currentSquares})
}else{
  alert("hi")
}
this.winnerSelect();
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
