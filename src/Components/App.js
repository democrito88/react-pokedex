import './../css/App.css';
import logo from "./../img/pokemon-logo-8.png";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Cartao from './Cartao';


function App() {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
        
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };   

    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20", requestOptions)
      .then(response => response.text())
      .then(result => setPokemons(JSON.parse(result).results))
      .catch(error => console.log('error', error));
  },
  []);
  
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
        <Row>
          {pokemons.map((pokemon, indice) => {
            return <Col className='mb-3' sm={2} key={indice}><Cartao props={pokemon} /></Col>;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
