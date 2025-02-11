import React, { useState } from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';

function Estatistica(props){
    const [stats, setStats] = useState([]);

    Object.values(props.pokemon).forEach((propriedade, key) => {
        if(key === 15){
            Object.values(propriedade).forEach((status) => 
                setStats([...stats, {name: status.stat.name, stats: status.base_stat}])
            )
        }
    });

    return(
        <Card>
            <Card.Body>
                <Card.Title>Stats</Card.Title>
                {stats.map((status, key) => {
                    return(
                        <Row>
                            <Col>
                                <label>{status.name}</label>
                                <ProgressBar>
                                    <ProgressBar className='success' now={status.stats} max={150} />
                                </ProgressBar>
                            </Col>
                        </Row>
                    );
                })}
            </Card.Body>
        </Card>
    );
}

export default Estatistica;