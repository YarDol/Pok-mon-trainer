import React, { useState, useEffect } from 'react';
import Container from '../layout/container';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Grid from '../layout/grid';

const TeamPage: React.FC = () => {
  const [savedPokemons, setSavedPokemons] = useState<any[]>(JSON.parse(localStorage.getItem('savedPokemons') || '[]'));
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const storedName = localStorage.getItem('firstName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleRemovePokemon = (pokemonName: string) => {
    const updatedPokemons = savedPokemons.filter(pokemon => pokemon.name !== pokemonName);
    setSavedPokemons(updatedPokemons);
    localStorage.setItem('savedPokemons', JSON.stringify(updatedPokemons));
  };

  return (
    <>
      <Container>
        <Navbar />
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">{userName ? `${userName}'s Team` : 'Team Page'}</h2>
          {savedPokemons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {savedPokemons.map((pokemon: any) => (
                <div key={pokemon.name} className="bg-gray-100 p-4 rounded-md flex items-center justify-between">
                  <span className="text-lg font-semibold">{pokemon.name}</span>
                  <button
                    onClick={() => handleRemovePokemon(pokemon.name)}
                    className="px-3 py-1 bg-red-500 text-white font-semibold rounded-md transition duration-300 hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg">No saved pokemons</p>
          )}
          <Grid pokemons={savedPokemons} />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default TeamPage;
