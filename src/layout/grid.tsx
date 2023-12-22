import React from 'react';
import Card from '../components/card';

interface GridProps {
  pokemons: any[];
  next?: () => void; // next тепер опціональний
}

const Grid: React.FC<GridProps> = ({ pokemons, next }) => {
  const handleButton = () => {
    if (next) {
      next(); // Викликати next, якщо він переданий
    }
  };

  return (
    <div className='grid'>
      <div className='grid__pokemon'>
        {pokemons.map((poke, index) => (
          <Card key={`${poke.name}-${index}`} pokemon={poke} />
        ))}
      </div>
      {next && pokemons.length >= 20 && (
        <div className="grid__wrapper-button">
          <button className='grid__button' type='button' onClick={handleButton}>Show more</button>
        </div>
      )}
    </div>
  );
};

export default Grid;
