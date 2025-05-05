import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './form.css'; 
import config from 'config';
const UserForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = { first_name: firstName, last_name: lastName };

        try {
            const response = await fetch(`${config.API_URL}/create_name`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                onSubmit();
                setFirstName('');
                setLastName('');
            } else {
                toast.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error connecting to the server');
        }
    };

    return (
        <Container className="form-container">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="form-heading">Create User</h2>
                    <Form onSubmit={handleSubmit} className="user-form">
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="form-input"
                            />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="form-input"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="submit-btn">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserForm;
