import React, { useState, useEffect } from 'react';
import Search from '../components/search';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Grid from '../layout/grid';
import Container from '../layout/container';

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [search, setSearch] = useState<any[]>([]);
  const [searching, setSearching] = useState<boolean>(false);

  const handleSearch = async (textSearch: string | null) => {
    if (!textSearch) {
      setSearch([]);
      setNotFound(false);
      return;
    }

    setNotFound(false);
    setSearching(true);

    try {
      const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${textSearch.toLowerCase()}`);
      const data = await api.json();
      if (!data) {
        setNotFound(true);
      } else {
        setSearch([data]);
      }
    } catch (error) {
      setNotFound(true);
    }

    setSearching(false);
  };

  const showPokemons = async (limit = 20, offset = 0) => {
    try {
      const api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const data = await api.json();
      const promises = data.results.map(async (pokemon: any) => {
        const result = await fetch(pokemon.url);
        const res = await result.json();
        return res;
      });

      const results = await Promise.all(promises);

      setPokemons((prevPokemons) => {
        const existingPokemonNames = prevPokemons.map((p: any) => p.name);
        const filteredResults = results.filter((r: any) => !existingPokemonNames.includes(r.name));
        return [...prevPokemons, ...filteredResults];
      });
      setNotFound(false);
      setTotal((prevTotal) => prevTotal + results.length);
    } catch (error) {
      console.error('Error fetching pokemons:', error);
    }
  };

  const nextPokemon = () => {
    showPokemons(20, total);
  };

  useEffect(() => {
    if (!searching) {
      showPokemons();
    }
  }, [searching]);

  const poke = search.length > 0 ? search : pokemons;

  return (
    <>
      <Container>
        <Navbar />
        <Search onHandleSearch={handleSearch} />
        {notFound ? <div>'Pokemon not found'</div> : <Grid pokemons={poke} next={nextPokemon} />}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
