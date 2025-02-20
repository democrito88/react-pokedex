import React, { useState } from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';

function Estatistica(props){
    const [stats, setStats] = useState([]);

    useState(() => {
        props.stats.forEach(status => 
            setStats(stats => [...stats, {name: status.stat.name, stats: status.base_stat}]));
    }, []);

    return(
        <Card>
            <Card.Body>
                <Card.Title>Stats</Card.Title>
                {stats.map((status, key) => {
                    return(
                        <Row key={key}>
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