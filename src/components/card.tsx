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
      <div className='flex flex-col md:flex-row items-center justify-around rounded-2xl relative py-5 px-0 bg-white bg-opacity-30 cursor-pointer' onClick={handleModal}>
        <div className='flex items-center justify-center md:justify-start absolute top-2 md:top-6 left-2 md:left-5 h-15'>
          <span className='ml-2 md:ml-10 font-medium sm:block hidden'>{`#${pokemon.order}`}</span>
        </div>
        <div className='absolute top-2 right-2 p-1 px-2 rounded-lg text-xs text-center text-black font-semibold'>
          <span className='inline-block text-center'>{pokemon.types[0].type.name}</span>
        </div>
        <h3 className='font-semibold text-center md:text-left sm:block hidden'>{pokemon.name}</h3>
        <img
          className='block z-2 w-40 h-full md:w-52 md:h-52'
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
