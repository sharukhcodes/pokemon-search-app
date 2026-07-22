import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchPokemonData } from '../utils/fetchPokemonData';

export const usePokemon = () => {
  const [types, setTypes] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(response.data.results);
      console.log('Fetched types:', response.data.results); // Log types
    };

    const fetchPokemon = async () => {
      const pokemonData = await fetchPokemonData();
      setPokemonList(pokemonData);
      setFilteredPokemon(pokemonData);
      console.log('Fetched Pokémon:', pokemonData); // Log Pokémon data
    };

    fetchTypes();
    fetchPokemon();
  }, []);

  const filterPokemon = (type, searchTerm) => {
    let filtered = pokemonList;
    if (type) {
      filtered = filtered.filter((pokemon) => pokemon.types.includes(type));
    }
    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredPokemon(filtered);
    console.log('Filtered Pokémon:', filtered); // Log filtered Pokémon
  };

  return { types, filteredPokemon, filterPokemon };
};
