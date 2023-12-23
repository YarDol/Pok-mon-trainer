import React, { useState, useEffect } from 'react';
import Container from '../layout/container';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Grid from '../layout/grid';
import TeamModal from '../components/teamModal';

const TeamPage: React.FC = () => {
  const [savedPokemons, setSavedPokemons] = useState<any[]>(JSON.parse(localStorage.getItem('savedPokemons') || '[]'));
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    if (storedName) {
      setFirstName(storedName);
    }
    if (storedLastName) {
      setLastName(storedLastName);
    }
  }, []);

  const handleRemovePokemon = (pokemonName: string) => {
    const updatedPokemons = savedPokemons.filter(pokemon => pokemon.name !== pokemonName);
    setSavedPokemons(updatedPokemons);
    localStorage.setItem('savedPokemons', JSON.stringify(updatedPokemons));
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    localStorage.setItem('firstName', event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    localStorage.setItem('lastName', event.target.value);
  };

  const showTeamModal = savedPokemons.length === 4;

  return (
    <>
      <Container>
        <Navbar />
        {showTeamModal && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded mt-4"
          >
            Show Team Summary
          </button>
        )}
        {showModal && (
          <TeamModal
            savedPokemons={savedPokemons}
            firstName={firstName}
            lastName={lastName}
            onClose={handleModalClose}
          />
        )}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold">
            {firstName ? `${firstName}'s Team` : 'Team Page'}
          </h2>
          <div className="mb-4">
            <label htmlFor="firstNameInput" className="block">
              Change First Name:
            </label>
            <input
              type="text"
              id="firstNameInput"
              value={firstName}
              onChange={handleFirstNameChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastNameInput" className="block">
              Change Last Name:
            </label>
            <input
              type="text"
              id="lastNameInput"
              value={lastName}
              onChange={handleLastNameChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          {savedPokemons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {savedPokemons.map((pokemon: any) => (
                <div
                  key={pokemon.name}
                  className="bg-gray-100 p-4 rounded-md flex items-center justify-between"
                >
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
