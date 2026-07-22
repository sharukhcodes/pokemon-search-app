import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';
import { useState } from 'react';

export default function Home() {
  const { types, filteredPokemon, filterPokemon } = usePokemon();
  const [type, setType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTypeChange = (e) => {
    setType(e.target.value);
    filterPokemon(e.target.value, searchTerm);
    console.log('Type changed:', e.target.value); // Log type change
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterPokemon(type, e.target.value);
    console.log('Search term changed:', e.target.value); // Log search term change
  };

  console.log('Rendering Home component with state:', { type, searchTerm, filteredPokemon }); // Log state

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-pokemon-bg p-4">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8 text-center text-white">Pokémon Search</h1>
        <form className="mb-8 flex justify-center items-center space-x-4">
          <select
            value={type}
            onChange={handleTypeChange}
            className="border p-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-200 text-blue-800"
          >
            <option value="">All Types</option>
            {types.map((t) => (
              <option key={t.name} value={t.name}>{t.name}</option>
            ))}
          </select>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Pokémon"
            className="border p-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 bg-green-200 text-green-800"
          />
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}
