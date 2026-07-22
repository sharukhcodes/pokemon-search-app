import Link from 'next/link';

const PokemonCard = ({ pokemon }) => {
  console.log('Rendering PokemonCard with props:', pokemon); // Log Pokémon props

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
      <div className="text-center">
        <img src={pokemon.highResImage} alt={pokemon.name} className="mx-auto w-24 h-24 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out" />
        <h2 className="text-lg font-bold capitalize mt-4">{pokemon.name}</h2>
        <Link href={`/pokemon/${pokemon.id}`}>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
