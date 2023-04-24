import './../css/App.css';
import logo from "./../img/pokemon-logo-8.png";
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import Cartao from './Cartao';

function App() {
  var [pokemons, setPokemons] = useState([]);

  function handleNewPokemon(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://pokeapi.co/api/v2/pokemon/", requestOptions)
      .then(response => response.text())
      .then((result) => {
        let resultado = JSON.parse(result);
        resultado.results.map((pokemon) => {
          return pokemons.push(pokemon);
        });
      }
      )
      .catch(error => console.log('error', error));
    
  }

  return (
    <div className="App">
      <Nav className='bg-danger border mb-3 p-2 justify-content-center'>
        <Row>
          <Col md={3}>
            <img src={logo} alt="" width={150} />
          </Col>
        </Row>
      </Nav>
      <Container>
        <Button className='btn-success' onClick={handleNewPokemon}>Bora</Button>
        <Row>
          {pokemons.map((pokemon, indice) => {
            return <Col sm={2}><Cartao pokemon={pokemon} /></Col>;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
