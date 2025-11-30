import { useEffect, useState } from "react";
import { Pokecard } from "./Pokecard"; // FIXED named import
import Navbar from "./Navbar"; // FIXED default import

export function PokemonAPI() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=200";

  async function fetchPokemon() {
    setError(null);

    try {
      const res = await fetch(API);
      const listData = await res.json();

      const detailedPokemonPromises = listData.results.map(
        async (currentPokemon) => {
          const res = await fetch(currentPokemon.url);
          const currData = await res.json();
          return currData;
        }
      );

      const detailedData = await Promise.all(detailedPokemonPromises);

      setPokemon(detailedData);
      console.log(detailedData);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  // ❗ FIXED: this was completely broken because there was no return
  // (no logic change, just making your intended filter actually return)
  const filteredData = pokemon.filter((curPokemon) => {
    return curPokemon.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());
  });

  if (loading) {
    return (
      <>
        <Navbar search={search} setSearch={setSearch} />
        <h1>Data is Loading.....</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar search={search} setSearch={setSearch} />
        <h1>Error: {error.message}</h1>
      </>
    );
  }

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="pokemon-grid flex flex-wrap items-center justify-evenly gap-10 p-10">
        {filteredData.map((currPokemon) => (
          <Pokecard key={currPokemon.id} PokemonData={currPokemon} />
        ))}
      </div>
    </>
  );
}
