import React from 'react';
import { Col, Nav, Row } from "react-bootstrap";
import "./Nav.css";
import logo from "../../img/pokemon-logo-8.png";

const Navegacao = () => {
    return(
        <Nav className='bg-danger border mb-3 p-2 justify-content-center'>
            <Row>
                <Col md={3}>
                    <img src={logo} alt="" width={150} />
                </Col>
            </Row>
        </Nav>
    );
}

export default Navegacao;