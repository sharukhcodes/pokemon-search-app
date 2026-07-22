import axios from 'axios';

export const fetchPokemonData = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemonData = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const pokemonDetails = await axios.get(pokemon.url);
      return {
        name: pokemonDetails.data.name,
        id: pokemonDetails.data.id,
        highResImage: pokemonDetails.data.sprites.other['official-artwork'].front_default,
        types: pokemonDetails.data.types.map((typeInfo) => typeInfo.type.name),
      };
    })
  );
  return pokemonData;
};
