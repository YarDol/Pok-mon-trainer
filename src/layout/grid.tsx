import React from 'react';
import Card from '../components/card';

interface GridProps {
  pokemons: any[];
  next?: () => void;
}

const Grid: React.FC<GridProps> = ({ pokemons, next }) => {
  const handleButton = () => {
    if (next) {
      next();
    }
  };

  return (
    <div className='pb-10'>
      <div className="grid grid-cols-4 grid-rows-4 gap-7 py-2.5">
        {pokemons.map((poke, index) => (
          <div key={`${poke.name}-${index}`} className="border-2 border-black rounded-md">
            <Card pokemon={poke} />
          </div>
        ))}
      </div>
      {next && pokemons.length >= 20 && (
        <div className="flex mx-12 mt-5 items-center relative h-12 w-26 z-5 place-content-center border-solid border-2 border-black">
          <button className='cursor-pointer' type='button' onClick={handleButton}>Show more</button>
        </div>
      )}
    </div>
  );
};

export default Grid;
