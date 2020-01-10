import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
 state = {
   allSushi: [],
   currentSushi : [],
    sushiIndex:0,
    monies: 30
 } 

handleFetch(){
  fetch(API)
  .then(res => res.json())
  .then(data => {
    this.setState({
      allSushi: data
    })
    this.popSushi()
  }
  )
}

popSushi=()=>{

   this.setState({
    currentSushi: this.state.allSushi.slice(this.state.sushiIndex,this.state.sushiIndex+4),
    sushiIndex: this.state.sushiIndex+4
  })


 }

 eatSushi = (sushi) =>{
   console.log('hi')
   console.log(sushi)
   sushi.isEaten = true
   console.log(this.state.currentSushi)
  let newSushiArr = this.state.currentSushi.map(item => {
     if(item.id === sushi.id){
      return item = sushi
     } 
     return item
   })
   console.log(newSushiArr)
   if(this.state.monies - sushi.price > 0){
    this.setState({
      currentSushi: newSushiArr,
      monies: this.state.monies - sushi.price
     })
   }
   
 }

componentDidMount(){
  this.handleFetch()
  
}

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.currentSushi } eatSushi={this.eatSushi} popSushi={this.popSushi}/>
        <Table monies={this.state.monies}/>
      </div>
    );
  }
}

export default App;