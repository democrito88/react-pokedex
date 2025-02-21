import React from "react";
import { Nav, Navbar, Form, InputGroup } from "react-bootstrap";
import "./Nav.css";
import logo from "../../img/pokemon-logo-8.png";
import tipos from "../../json/tipos.json";

const Navegacao = () => {
  return (
    <>
      <header className="navegacao mb-3 p-2 d-flex justify-content-center">
        <img src={logo} alt="" width={150} />
      </header>
      <Navbar>
        <Nav className="w-100 d-flex flex-row justify-content-around">
          <Nav.Item>
            <Form.Select>
              <option>Filtre por tipo</option>
              {tipos.map((tipo) => (
                <option value={tipo}>
                  <img
                    src={`../../tipos/${tipo.toLowerCase()}.webp`}
                    alt={tipo}
                    width={20}
                  />
                  <span>{tipo}</span>
                </option>
              ))}
            </Form.Select>
          </Nav.Item>
          <Nav.Item>
            <Form.Select>
              {[...Array(8).keys()].map((geracao) => (
                <option value={geracao}>
                  <span>Geração nº{geracao + 1}</span>
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
