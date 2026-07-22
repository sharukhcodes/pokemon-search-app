import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonDetails from '../../components/PokemonDetails';

const PokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!id) return;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemonData = {
        name: response.data.name,
        id: response.data.id,
        highResImage: response.data.sprites.other['official-artwork'].front_default,
        types: response.data.types.map((typeInfo) => typeInfo.type.name),
        stats: response.data.stats,
        abilities: response.data.abilities,
        moves: response.data.moves,
      };
      setPokemon(pokemonData);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonPage;
