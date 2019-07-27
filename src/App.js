import React from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Container from './components/Container';
import Card from './components/Card';
import Footer from './components/Footer';
import characters from "./characters.json";

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    message: "Click an Image to Start",
    characters
  };

  restart = () => {
    this.state.characters.forEach((character) => (
      character.clicked = false
    ));
    this.setState({
      score: 0,
      message: "Incorrect!"
    });
  };

  winner = () => {
    this.state.characters.forEach((character) => (
      character.clicked = false
    ));
    this.setState({
      score: 0,
      message: "YOU WIN!"
    });
  }

  handleClick = id => {
    const found = this.state.characters.find((character) => character.id === id)
    if (found.clicked === false) {
      found.clicked = true;
      this.state.characters.sort(() => Math.random() - 0.5);
      if (this.state.score + 1 > this.state.highScore) {
        this.setState({
          highScore: this.state.highScore + 1
        });
      }
      if (this.state.score + 1 === 12) {
        this.winner();
      }
      else {
        this.setState({
          score: this.state.score + 1,
          message: "Correct!"
        });
      }
    }
    else {
      this.state.characters.sort(() => Math.random() - 0.5);
      this.restart();
    }
  }
  render() {
    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
        <Hero />
        <Container>
          {this.state.characters.map((character) => (
            <Card
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              click={this.handleClick}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;