import React, { createContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';

const PokemonContext = createContext();
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const geracoes = [
  {
    offset: 0, 
    limit: 151 
  },
  {
    offset: 151,
    limit: 100
  },
  {
    offset: 251,
    limit: 135
  },
  {
    offset: 386,
    limit: 107
  },
  {
    offset: 494,
    limit: 156
  },
  {
    offset: 649,
    limit: 72
  },
  {
    offset: 721,
    limit: 88
  },
  {
    offset: 809,
    limit: 96
  },
  {
    offset: 905,
    limit: 100
  }
]

const PokemonProvider = ({ children }) => {
  const [geracao, setGeracao] = useState(0);

  const [pokemonList, setPokemonList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loadingSelected, setLoadingSelected] = useState(false);

  // ✅ Cache em memória para pokémons específicos
  const pokemonCache = useRef({});

  // 🔄 Fetch geral
  const fetchPokemonList = async () => {
    const { offset, limit } = geracoes[geracao];
    try {
      setLoadingList(true);
      const response = await axios.get(`${BASE_URL}?offset=${offset}&limit=${limit}`);
      setPokemonList(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar lista de Pokémon:', error);
    } finally {
      setLoadingList(false);
    }
  };

  // 🔄 Fetch individual com cache
  const fetchPokemonById = async (idOrName) => {
    const idStr = idOrName.toString().toLowerCase();

    // ✅ Verifica no cache antes de buscar
    if (pokemonCache.current[idStr]) {
      setSelectedPokemon(pokemonCache.current[idStr]);
      return;
    }

    try {
      setLoadingSelected(true);
      const response = await axios.get(`${BASE_URL}/${idStr}`);
      const data = response.data;

      // Armazena no cache
      pokemonCache.current[idStr] = data;

      setSelectedPokemon(data);
    } catch (error) {
      console.error(`Erro ao buscar Pokémon ${idStr}:`, error);
      setSelectedPokemon(null);
    } finally {
      setLoadingSelected(false);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, [geracao]);

  return (
    <PokemonContext.Provider
      value={{
        setGeracao,
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
