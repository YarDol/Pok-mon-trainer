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
        className='flex items-end justify-around rounded-2xl relative py-5 px-0 bg-white bg-opacity-30'
        onClick={handleModal}
      >
        <div className='flex items-center absolute top-6 left-5 h-15'>
          <span className='ml-10 font-medium'>{`#${pokemon.order}`}</span>
        </div>
        <div
          className='absolute top-0 right-0 p-1 px-2 rounded-lg text-xs text-center text-black font-semibold'
        >
          <span className='inline-block text-center'>{pokemon.types[0].type.name}</span>
        </div>
        <h3 className='font-semibold'>{pokemon.name}</h3>
        <img
          className='block z-2 w-40 h-full'
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
