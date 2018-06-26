import React, { Component } from "react";
import Navbar from "./components/FriendCard/Navbar";
import Header from "./components/FriendCard/Header";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked :[],
    score: 0
  };


  clickedImage = event => {
    const currentImage = event.target.alt;
    const clickedFriends = this.state.clicked.indexOf(currentImage)>-1;

    if (clickedFriends) {
      this.setState ({
        friends: this.state.friends.sort(function(a,b){
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
        alert("Game Over. Start Again")
    } else {
      this.setState(
        {
          friends: this.state.friends.sort(function(a,b){
            return 0.5 - Math.random();
          }),
          clicked: this.state.clicked.concat(
            currentImage
          ),
          score: this.state.score + 1
        }
      )
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score}/>
        <Header/>
        {this.state.friends.map(friend => (
          <FriendCard
            clickedImage={this.clickedImage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
          
        ))}
      </Wrapper>
    );
  }
}

export default App;
