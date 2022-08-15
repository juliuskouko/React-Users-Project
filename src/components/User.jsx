import React from 'react';
import { Card, Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap"

function User(props) {
    return (
        <Col md="4">
            <Container>
                <Row>
                    <Card style={{ marginBottom: '1.5rem' }}>
                        <Card.Body>
                            
                            <Card.Subtitle className="mb-2 text-muted">User's Profile</Card.Subtitle>
                            <Card.Title>{props.userInfo.name}</Card.Title>
                            <Card.Text>
                                <p>Email: {props.userInfo.email}</p>
                                <p>Gen: {props.userInfo.gen}</p>
                            </Card.Text>
                            <Card.Link href="#">Edit</Card.Link>
                            <Card.Link href="#">Delete</Card.Link>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </Col>
    )
}

export default User;
