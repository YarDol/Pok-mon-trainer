import React, { useState } from 'react';
import Modal from './modal';

interface CardProps {
  pokemon: {
    types: Array<{
      type: {
        name: string;
      };
    }>;
    past_types: Array<{
      generation: {
        name: string;
      };
    }>;
    name: string;
    height: number;
    weight: number;
    abilities: Array<{
      ability: {
        name: string;
      };
    }>;
    stats: Array<{
      stat: {
        name: string;
      };
      base_stat: number;
    }>;
    sprites: {
      front_default: string;
    };
    order: number; 
  };
}



const Card: React.FC<CardProps> = ({ pokemon }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
    document.body.classList.toggle('dark');
  };

  return (
    <>
      <div
        className='card'
        onClick={handleModal}
        style={{ backgroundColor: `var(--bg-poke-color-light-${pokemon.types[0].type.name})` }}
      >
        <div className='card__title'>
          <span className='card__title-text'>{`#${pokemon.order}`}</span>
        </div>
        <div
          className='card__badge'
          style={{ backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})` }}
        >
          <span className='card__badge-text'>{pokemon.types[0].type.name}</span>
        </div>
        <h3 className='card__name'>{pokemon.name}</h3>
        <img
          className='card__image'
          width={120}
          height={120}
          src={pokemon.sprites['front_default']}
          alt=''
          loading='lazy'
        />
      </div>
      {showModal && <Modal onHandleModal={handleModal} pokemon={pokemon} />}
    </>
  );
};

export default Card;
