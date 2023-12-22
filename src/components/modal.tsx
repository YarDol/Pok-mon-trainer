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

    // Перевірка наявності покемона у списку збережених
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
    <div className='modal'>
      <button className='modal__close' onClick={handleModal}>
        Close X
      </button>
      <div className='modal__content'>
        <div className="modal__content-features" style={{ backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})` }}>
          <div className="modal__content-featuresRight">
            <span className='modal__content-featuresHabitat'>
            </span>
            {pokemon['past_types'].length > 0 && (
              <span className='modal__content-featuresGeneration'>{pokemon['past_types'][0].generation.name}</span>
            )}
          </div>
          <div className="modal__content-featuresLeft">
            <span className='modal__content-featuresHeight'>Height: {pokemon.height}</span>
            <span className='modal__content-featuresWeight'>weight : {pokemon.weight}</span>
          </div>
        </div>
        <div className="modal__content-description">
          <img className='modal__content-descriptionImage' src={pokemon.sprites['front_default']} alt="" />
          <h3 className='modal__content-descriptionTitle'>{pokemon.name}</h3>
          <p className='modal__content-descriptionParagraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quaerat eligendi </p>
        </div>
        <div className="modal__content-other">
          <div className="modal__content-otherBreadcrumb">
            <h4 className='modal__content-otherBreadcrumbAbilities'>Abilities</h4>
            {pokemon.abilities.map(({ ability }) => (
              <span key={ability.name} className='modal__content-otherBreadcrumbAbility'>{ability.name}</span>
            ))}
          </div>
          <div className="modal__content-otherStats">
            <h4 className='modal__content-otherStatsTitle'>Stats</h4>
            {pokemon.stats.map((stat, index) => (
              <div className='modal__content-otherStat' key={stat.stat.name}>
                <div className='modal__content-otherStatContent'>
                  <span className='modal__content-otherStatContentPower'>{stat.stat.name}</span>
                  <span className='modal__content-otherStatContentValue'>{stat.base_stat}</span>
                </div>
                <div className='modal__content-otherStatTimeLine'>
                  {stat.base_stat >= 100 ?
                    <div className='modal__content-otherStatTimeLineStat' style={{ width: '100%', backgroundColor: `${colors[index]}` }}></div> :
                    <div className='modal__content-otherStatTimeLineStat' style={{ width: `${stat.base_stat}%`, backgroundColor: `${colors[index]}` }}></div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className='modal__save' onClick={handleSavePokemon}>
        Save to Team
      </button>
    </div>
  );
};

export default Modal;