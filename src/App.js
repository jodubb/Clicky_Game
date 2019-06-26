import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Cartoons from "./Cartoons";




  // set state to zero
  class App extends Component {
    state = {
      Cartoons,
      clickedCartoons: [],
      score: 0,
      goal: 12,
    };

    // when a card is clicked, its taken out of the array
    imageClick = event => {
      const currentCartoon = event.target.alt;
      const CartoonAlreadyClicked =
      this.state.clickedCartoons.indexOf(currentCartoon) > -1;
    


    // game is reset when select a cartoon that's already been selected
    if(CartoonAlreadyClicked) {
      this.setState({
        Cartoon: this.state.Cartoon.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCartoons: [],
        score: 0
      });
      // alert("You lose. Play again?");

      // if you click on a cartoon, you score increases and cards shuffle
    } else {
    this.setState(
      {
        Cartoon: this.state.Cartoons.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCartoons: this.state.clickedCartoons.concat(
          currentCartoon
        ),
        score: this.state.score + 1
      },

      // if you get all correct you get a message and the game resets
      () => {
        if (this.state.score === 12){
          alert("Hooray! You're a 90s kid!");
      this.setState({
        Cartoons: this.state.cartoons.sort(function(a, b){
          return 0.5 - Math.random();
        }),
        clickedCartoons: [],
        score: 0
      });    
     }
      }
    );
  }
    }

    render() {
      return (
        <div className="App">
          <Navbar
            score={this.state.score}
          />
          <Jumbotron />
          <div className="wrapper">
            {this.state.Cartoons.map(Cartoons => (
              <Card
                imageClick={this.imageClick}
                id={Cartoons.id}
                image={Cartoons.image}
              />
            ))}
          </div>
  
          {/* <Cartoons /> */}
        </div>
      );
    }
  }


export default App;
