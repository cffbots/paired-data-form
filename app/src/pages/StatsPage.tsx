import React from 'react'
import { useStats } from '../api';
import { ListGroup, ListGroupItem, Badge, Grid, Row, Col } from 'react-bootstrap';

const style = { padding: '10px' };

export const StatsPage = () => {
    const stats = useStats();
    if (stats.loading) {
        return <div style={style}>Loading...</div>;
    }
    if (!stats.data) {
        return <div style={style}>Error: {stats.error!.message}</div>;
    }
    const data = stats.data;
    return (
        <div style={style} >
            <Grid fluid>
                <Row>
                    <h2>Statistics of all available projects</h2>
                    <Col md={4}>
                        <fieldset className="global">
                            <legend>Overall</legend>
                            <ListGroup>
                                <ListGroupItem>Number of projects <Badge>{data.global.projects}</Badge></ListGroupItem>
                                <ListGroupItem>Number of unique principal investigators <Badge>{data.global.principal_investigators}</Badge></ListGroupItem>
                                <ListGroupItem>Number of unique metabolome samples <Badge>{data.global.metabolome_samples}</Badge></ListGroupItem>
                            </ListGroup>
                        </fieldset>

                    </Col>
                    <Col md={4}>
                        <fieldset>
                            <legend>Top principal investigators</legend>
                            <ListGroup>
                                {data.top.principal_investigators.map(
                                    ([value, count]) => <ListGroupItem key={value}>{value} <Badge>{count}</Badge></ListGroupItem>
                                )}
                            </ListGroup>
                        </fieldset>
                    </Col>
                    <Col md={4}>
                        <fieldset>
                            <legend>Top submitters</legend>
                            <ListGroup>
                                {data.top.submitters.map(
                                    ([value, count]) => <ListGroupItem key={value}>{value} <Badge>{count}</Badge></ListGroupItem>
                                )}
                            </ListGroup>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <fieldset>
                            <legend>Genome types</legend>
                            <ListGroup>
                                {data.top.genome_types.map(
                                    ([value, count]) => <ListGroupItem key={value}>{value} <Badge>{count}</Badge></ListGroupItem>
                                )}
                            </ListGroup>
                        </fieldset>
                    </Col>
                    <Col md={4}>
                        <fieldset>
                            <legend>Top species</legend>
                            <ListGroup>
                                {data.top.species.map(
                                    ([value, count]) => <ListGroupItem key={value}>{value} <Badge>{count}</Badge></ListGroupItem>
                                )}
                            </ListGroup>
                        </fieldset>
                    </Col>
                    <Col md={4}>
                        <fieldset>
                            <legend>Instrument types</legend>
                            <ListGroup>
                                {data.top.instruments_types.map(
                                    ([value, count]) => <ListGroupItem key={value}>{value} <Badge>{count}</Badge></ListGroupItem>
                                )}
                            </ListGroup>
                        </fieldset>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <fieldset>
                            <legend>Growth media</legend>
                            <ListGroup>
                                {data.top.growth_media.map(
                                    ([value, count]) => <ListGroupItem key={value}>{value} <Badge>{count}</Badge></ListGroupItem>
                                )}
                            </ListGroup>
                        </fieldset>
                    </Col>
                    <Col md={4}>
                        <fieldset>
                            <legend>Top solvents</legend>
                            <ListGroup>
                                {data.top.solvents.map(
                                    ([value, count]) => <ListGroupItem key={value}>{value} <Badge>{count.toFixed(0)}</Badge></ListGroupItem>
                                )}
                            </ListGroup>
                        </fieldset>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}