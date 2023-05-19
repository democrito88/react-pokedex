import React from 'react';
import './../css/App.css';
import logo from "./../img/pokemon-logo-8.png";
import { Row, Col, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router';

function App() {

  return (
    <div className="App">
      <Nav className='bg-danger border mb-3 p-2 justify-content-center'>
        <Row>
          <Col md={3}>
            <img src={logo} alt="" width={150} />
          </Col>
        </Row>
      </Nav>
      <Outlet/>
    </div>
  );
}

export default App;
