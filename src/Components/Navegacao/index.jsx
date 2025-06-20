import React, { useContext } from "react";
import { Nav, Navbar, Form, InputGroup } from "react-bootstrap";
import "./Nav.css";
import logo from "../../img/pokemon-logo-8.png";
import tipos from "../../json/tipos.json";
import PokemonContext from "../../contexts/PokemonContext";
import { Link } from "react-router-dom";

const Navegacao = () => {
  const {setGeracao} = useContext(PokemonContext);
  return (
    <>
      <header className="navegacao mb-3 p-2 d-flex justify-content-center">
        <Link to={"/"} className="text-decoration-none">
          <img src={logo} alt="" width={150} />
        </Link>
      </header>
      <Navbar>
        <Nav className="w-100 d-flex flex-row justify-content-around">
          <Nav.Item>
            <Form.Select>
              <option>Filtre por tipo</option>
              {tipos.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </Form.Select>
          </Nav.Item>
          <Nav.Item>
            <Form.Select onChange={(e) => setGeracao(e.target.value)}>
              {[...Array(8).keys()].map((geracao) => (
                <option key={geracao} value={geracao + 1}>
                  Geração nº{geracao + 1}
                </option>
              ))}
            </Form.Select>
          </Nav.Item>
          <Nav.Item>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar..."
                aria-label="buscar"
                aria-describedby="basic-addon1"
                width={300}
              />
            </InputGroup>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navegacao;
