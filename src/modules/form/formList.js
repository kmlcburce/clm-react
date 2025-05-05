import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col, Card, Pagination } from 'react-bootstrap';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    const fetchUsers = async (page = 1) => {
        try {
            const response = await fetch('http://localhost:8000/api/app/retrieve_name', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ page, perPage: usersPerPage })
            });

            if (response.ok) {
                const data = await response.json();
                setUsers(data.users || []);
                setTotalUsers(data.total || 0);
            } else {
                console.error('Failed to fetch users:', response.status);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(totalUsers / usersPerPage);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header as="h5" className="bg-primary text-white">
                            <strong>User List</strong>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && totalUsers > 0 ? (
                                        users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.first_name}</td>
                                                <td>{user.last_name}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="2">No users found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                            <Pagination>
                                <Pagination.Prev 
                                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} 
                                    disabled={currentPage === 1} 
                                />
                                {[...Array(totalPages)].map((_, index) => (
                                    <Pagination.Item 
                                        key={index + 1} 
                                        active={index + 1 === currentPage}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next 
                                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} 
                                    disabled={currentPage === totalPages} 
                                />
                            </Pagination>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserList;
