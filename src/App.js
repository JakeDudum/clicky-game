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
    characters
  };

  restart = () => {
    this.state.characters.forEach((character) => (
      character.clicked = false
    ));
    this.setState({
      score: 0
    });
  };

  handleClick = id => {
    const found = this.state.characters.find((character) => character.id === id)
    if (found.clicked === false) {
      found.clicked = true;
      this.state.characters.sort(() => Math.random() - 0.70);
      if (this.state.score + 1 > this.state.highScore) {
        this.setState({
          score: this.state.score + 1,
          highScore: this.state.highScore + 1
        });
      }
      else {
        this.setState({
          score: this.state.score + 1
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
        <Navbar score={this.state.score} highScore={this.state.highScore}/>
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