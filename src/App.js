import React from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Container from './components/Container';
import Card from './components/Card';
import Footer from './components/Footer';
import characters from "./characters.json";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Container>
        {characters.map(character => (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            location={character.location}
          />
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
