import './../css/App.css';
import logo from "./../img/pokemon-logo-8.png";
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import Cartao from './Cartao';

function App() {
  var [pokemons, setPokemons] = useState([
    {
      'name': 'bulbasaur',
      'url': 'A leafy frog pokemon'
    },
    {
      'name': 'charmander',
      'url': 'A fire lizard pokemon'
    },
    {
      'name': 'venusaur',
      'url': 'A pokemon'
    },
    {
      'name': 'charmeleon',
      'url': 'A pokemon'
    }
  ]);

  function handleNewPokemon(novoPokemon){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://pokeapi.co/api/v2/pokemon/", requestOptions)
      .then(response => response.text())
      .then((result) => {
        let resultado = JSON.parse(result);
        resultado.results.map((pokemon, indice) => {
          console.log(pokemons);
          const add = [...pokemons, novoPokemon];
          setPokemons(add);

          return setPokemons;
        })
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
