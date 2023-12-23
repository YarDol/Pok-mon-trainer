import React from 'react';

interface ModalProps {
  pokemon: {
    types: { type: { name: string } }[];
    past_types: { generation: { name: string } }[];
    name: string;
    height: number;
    weight: number;
    abilities: { ability: { name: string } }[];
    stats: { stat: { name: string }; base_stat: number }[];
    sprites: { front_default: string };
  };
  onHandleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ pokemon, onHandleModal }) => {
  const handleModal = () => {
    onHandleModal();
  };

  const handleSavePokemon = () => {
    const savedPokemons = JSON.parse(localStorage.getItem('savedPokemons') || '[]');

    const isPokemonAlreadySaved = savedPokemons.some((savedPokemon: any) => savedPokemon.name === pokemon.name);

    if (!isPokemonAlreadySaved) {
      if (savedPokemons.length < 4) {
        const newSavedPokemons = [...savedPokemons, pokemon];
        localStorage.setItem('savedPokemons', JSON.stringify(newSavedPokemons));
        alert(`${pokemon.name} saved to your team!`);
      } else {
        alert('You have reached the limit of 4 saved pokemons in your team.');
      }
    } else {
      alert(`${pokemon.name} is already saved in your team!`);
    }
  };

  const colors = ['#FC6B6E', '#2196F3', '#094BE8', '#2196F3', '#3ED1E0', '#CF9B48'];

  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-lg bg-gray-100 text-black z-10 rounded-lg p-5 border-2 border-black'>
      <button className='absolute top-2 right-2 bg-transparent border-none outline-none z-20 text-lg' onClick={handleModal}>
        Close X
      </button>
      <div className='flex flex-col items-center'>
        <div className="p-5">
          <div className="flex flex-col gap-y-4">
            <span className='text-center'>Height: {pokemon.height}</span>
            <span className='text-center mb-6'>Weight: {pokemon.weight}</span>
          </div>
          {pokemon['past_types'].length > 0 && (
            <span className='text-center'>{pokemon['past_types'][0].generation.name}</span>
          )}
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <img className='w-40 rounded-full bg-gray-100 bg-opacity-95 -mt-10' src={pokemon.sprites['front_default']} alt="" />
          <h3 className='text-xl uppercase'>{pokemon.name}</h3>
          <p className='text-center text-sm'>Some description</p>
        </div>
        <div className="flex justify-around mt-5">
          <div className="">
            <h4 className='mb-3 mr-6 text-center'>Abilities</h4>
            <div className="flex flex-wrap justify-center">
            {pokemon.abilities.map(({ ability }) => (
              <span key={ability.name} className='mt-2 mr-6 px-3 py-1 bg-gray-200 text-center rounded-full'>{ability.name}</span>
            ))}
          </div>
          </div>
          <div className="w-60">
            <h4 className="text-center">Stats</h4>
            {pokemon.stats.map((stat, index) => (
              <div className='flex flex-col' key={stat.stat.name}>
                <div className='text-xs flex justify-between'>
                  <span className=''>{stat.stat.name}</span>
                  <span className=''>{stat.base_stat}</span>
                </div>
                <div className='bg-gray-500 w-full h-2 rounded-lg mb-1 relative'>
                  {stat.base_stat >= 100 ?
                    <div className='absolute top-0 left-0 h-full rounded-md bg-black z-10' style={{ width: '100%', backgroundColor: `${colors[index]}` }}></div> :
                    <div className='absolute top-0 left-0 h-full rounded-md bg-black z-10' style={{ width: `${stat.base_stat}%`, backgroundColor: `${colors[index]}` }}></div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className='w-full py-3 mt-5 bg-black text-white rounded-md hover:bg-black transition duration-300'
          onClick={handleSavePokemon}
        >
          Save to Team
        </button>
      </div>
    </div>
  );
};

export default Modal;
