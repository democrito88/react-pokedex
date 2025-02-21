import React from "react";
import {Container} from "react-bootstrap";
import Dados from "../../Components/Dados";
import Estatistica from "../../Components/Estatistica";
import Resumo from "../../Components/Resumo";
import Linhagem from "../../Components/Linhagem";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import "./Detalhes.css";

function Detalhes() {
  const { id } = useParams();
  var [variavel, trabalhando] = useFetch(
    "https://pokeapi.co/api/v2/pokemon/" + id
  );

  return trabalhando ? (
    <p>Carregando</p>
  ) : (
    <Container className="d-flex flex-row container">
      <div className="d-flex flex-column align-items-center gap-2 border rounded-2 resumo">
        <Resumo pokemon={variavel == null ? { name: "eu" } : variavel} />
        <Linhagem
          url={variavel == null ? { name: "eu" } : variavel.species.url}
        />
      </div>
      <div className="d-flex flex-column align-items-center gap-3 estatisticas">
        <Estatistica
          stats={variavel == null ? { name: "eu" } : variavel.stats}
        />
        <Dados pokemon={variavel == null ? { name: "eu" } : variavel} />
      </div>
    </Container>
  );
}

export default Detalhes;
