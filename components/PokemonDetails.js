const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-pokemon-details-bg p-4">
      <div className="container mx-auto">
        <div className="details-container">
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <img src={pokemon.highResImage} alt={pokemon.name} className="pokemon-image mx-auto" />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold capitalize mb-4">Name: {pokemon.name}</h1>
              <div className="flex flex-wrap space-x-4 justify-center md:justify-start">
                <h2 className="text-xl font-semibold">Type:</h2>
                {pokemon.types.map((type) => (
                  <span key={type} className="bg-blue-500 text-white px-4 py-2 rounded-md">{type}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="stats-box">
              <h2 className="text-2xl font-semibold mb-2">Stats</h2>
              <ul>
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name} className="flex justify-between">
                    <span>{stat.stat.name}</span>
                    <span>{stat.base_stat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="abilities-box">
              <h2 className="text-2xl font-semibold mb-2">Abilities</h2>
              <ul>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="moves-box">
              <h2 className="text-2xl font-semibold mb-2">Moves</h2>
              <ul className="columns-2">
                {pokemon.moves.slice(0, 10).map((move) => (
                  <li key={move.move.name}>{move.move.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
