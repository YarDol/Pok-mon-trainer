import React, { useState } from 'react';
import Container from '../layout/container';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Grid from '../layout/grid';

const TeamPage: React.FC = () => {
  const [savedPokemons, setSavedPokemons] = useState<any[]>(JSON.parse(localStorage.getItem('savedPokemons') || '[]'));

  const handleRemovePokemon = (pokemonName: string) => {
    const updatedPokemons = savedPokemons.filter(pokemon => pokemon.name !== pokemonName);
    setSavedPokemons(updatedPokemons);
    localStorage.setItem('savedPokemons', JSON.stringify(updatedPokemons));
  };

  return (
    <>
      <Container>
        <Navbar />
        <div>
          <h2>Saved Pokemons:</h2>
          {savedPokemons.length > 0 ? (
            <div>
              <Grid pokemons={savedPokemons} />
              <div className="pokemon-buttons">
                {savedPokemons.map((pokemon: any) => (
                  <button key={pokemon.name} onClick={() => handleRemovePokemon(pokemon.name)}>Remove</button>
                ))}
              </div>
            </div>
          ) : (
            <p>No saved pokemons</p>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default TeamPage;
