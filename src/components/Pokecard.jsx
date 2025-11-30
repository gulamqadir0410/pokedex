export function Pokecard({ PokemonData }) {
  return (
    <>
      <div className="w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden border border-gray-100">
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative">
          <img
            src={PokemonData?.sprites?.other?.dream_world?.front_default}
            alt={PokemonData?.name}
            className="w-32 h-32 object-contain z-10"
          />
          <div className="absolute w-40 h-40 bg-white/40 rounded-full blur-2xl"></div>
        </div>

        <div className="type-tag bg-orange-600 ">
          <div className="text-sm font-bold text-white text-center py-2">
            <p className="capitalize">
              {PokemonData.types.map((res) => res.type.name).join(", ")}
            </p>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 capitalize mb-3 text-center">
            {PokemonData?.name}
          </h2>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
            <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
              <span className="text-gray-400 font-medium">Height</span>
              <span className="text-gray-700 font-bold">
                {PokemonData?.height}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
              <span className="text-gray-400 font-medium">Weight</span>
              <span className="text-gray-700 font-bold">
                {PokemonData?.weight}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
              <span className="text-gray-400 font-medium">Speed</span>
              <span className="text-gray-700 font-bold">
                {PokemonData?.stats[5]?.base_stat}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
              <span className="text-gray-400 font-medium">Exp</span>
              <span className="text-gray-700 font-bold">
                {PokemonData?.base_experience}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
              <span className="text-gray-400 font-medium">Attack</span>
              <span className="text-gray-700 font-bold">
                {PokemonData?.stats[1]?.base_stat}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
              <span className="text-gray-400 font-medium">Ability</span>
              <span className="text-gray-700 font-bold capitalize">
                {PokemonData?.abilities?.[0]?.ability?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
