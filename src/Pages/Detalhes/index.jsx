import React, { useContext, useEffect } from "react";
import {Container} from "react-bootstrap";
import Dados from "../../Components/Dados";
import Estatistica from "../../Components/Estatistica";
import Resumo from "../../Components/Resumo";
import Linhagem from "../../Components/Linhagem";
import { useParams } from "react-router";
import { PokemonContext } from "../../contexts/PokemonContext";
import "./Detalhes.css";

function Detalhes() {
  const { id } = useParams();
  const { selectedPokemon, loadingSelected, fetchPokemonById } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonById(id);
  }, [id]);

  if (loadingSelected) return <p>Carregando detalhes...</p>;
  if (!selectedPokemon) return <p>Pokémon não encontrado.</p>;

  return (
    <Container className="d-flex flex-row container">
      <div className="d-flex flex-column align-items-center gap-2 border rounded-2 resumo">
        <Resumo pokemon={selectedPokemon} />
        <Linhagem
          url={selectedPokemon.species.url}
        />
      </div>
      <div className="d-flex flex-column align-items-center gap-3 estatisticas">
        <Estatistica
          stats={selectedPokemon.stats}
        />
        <Dados pokemon={selectedPokemon} />
      </div>
    </Container>
  )
}

export default Detalhes;
