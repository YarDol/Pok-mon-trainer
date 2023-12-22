import React from 'react';
import Card from '../components/card';

interface GridProps {
  pokemons: any[]; // Оновіть тип для об'єктів покемонів згідно з вашими даними
  next: () => void;
}

const Grid: React.FC<GridProps> = ({ pokemons, next }) => {
  const handleButton = () => {
    next();
  };

  return (
    <div className='grid'>
      <div className='grid__pokemon'>
        {pokemons.map((poke, index) => (
          <Card key={`${poke.name}-${index}`} pokemon={poke} />
        ))}
      </div>
      {pokemons.length >= 20 && (
        <div className="grid__wrapper-button">
          <button className='grid__button' type='button' onClick={handleButton}>Show more</button>
        </div>
      )}
    </div>
  );
};

export default Grid;
