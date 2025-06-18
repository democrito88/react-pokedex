import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PokemonContext = createContext();

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loadingSelected, setLoadingSelected] = useState(false);

  // ✅ Requisição geral
  const fetchPokemonList = async () => {
    try {
      setLoadingList(true);
      const response = await axios.get(`${BASE_URL}?offset=0&limit=151`);
      setPokemonList(response.data.results); // retorna [{ name, url }]
    } catch (error) {
      console.error('Erro ao buscar lista de Pokémon:', error);
    } finally {
      setLoadingList(false);
    }
  };

  // ✅ Requisição específica por ID ou nome
  const fetchPokemonById = async (idOrName) => {
    try {
      setLoadingSelected(true);
      const response = await axios.get(`${BASE_URL}/${idOrName}`);
      setSelectedPokemon(response.data); // dados detalhados do Pokémon
    } catch (error) {
      console.error(`Erro ao buscar Pokémon ${idOrName}:`, error);
      setSelectedPokemon(null);
    } finally {
      setLoadingSelected(false);
    }
  };

  // Carrega a lista inicial ao montar
  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        loadingList,
        fetchPokemonList,
        selectedPokemon,
        loadingSelected,
        fetchPokemonById,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
export default PokemonContext;
