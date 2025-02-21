import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import "./Cartao.css";

function Cartao({ props }) {
    console.log(props.url);
    const [ variavel, trabalhando ] = useFetch(props.url);

    return (
        trabalhando ?
        <p>Carregando...</p>
        :
        <Link to={`/Detalhes/${(variavel != null ? variavel.id : "1")}`} style={{textDecoration:"none"}}>
            <Card bg={"light"}>
                <Card.Img variant="top" src={variavel == null ? "" : variavel.sprites.front_default} />
                <Card.Body >
                    <div className='m-3 p-3 bg-white d-flex flex-column texto-cartao'>
                        <h5 className='texto-numero'>#{variavel.id}</h5>
                        <Card.Title className="text-center text-capitalize" >{variavel == null ? "" : variavel.name}</Card.Title>
                        <Card.Text className="text-center">
                            <img src={"../../tipos/"+(variavel == null ? "" : variavel.types[0].type.name+'.webp')} width={40} alt="" />
                            {(variavel == null ? "" : variavel.types[1]) ? <img src={"../../tipos/"+(variavel == null ? "" : variavel.types[1].type.name+'.webp')} width={40} alt="" /> : ""}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Cartao;