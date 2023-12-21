import React, { useState } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Book from "../bookList/books";
import './bookdetails.css'; // Import your custom styles if needed

const books = require('../booksmodule');
let booksarray = books.books;

function searchbookbyisbn(ISBN) {
    return booksarray.find(Book => Book.ISBN == ISBN);
}

function MovieDetails() {
    const [productData, setProductData] = useState({
        quantity: 5,
    });

    const addToCart = () => {
        if (productData.quantity > 0) {
            setProductData(prevProductData => ({
                ...prevProductData,
                quantity: prevProductData.quantity - 1
            }));
        }
    };

    const { ISBN } = useParams();
    let movie = searchbookbyisbn(ISBN);

    const [lang, setLang] = useState('en-US');

    const changeLang = () => {
        setLang(lang === 'en-US' ? 'ar-SA' : 'en-US');
    };

    return (
        <div className="container mt-5">
            <Row>
                <Col md={6}>
                    <Card style={{ width: '25rem', height: '37rem', margin: '2px' }} className="Card">
                        <Card.Img variant="top" src={`${movie.image}`} className="card-image" />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>
                                Available: {productData.quantity} Items
                            </Card.Text>
                            <Card.Text>
                                Price: {movie.price.value} dollar
                            </Card.Text>
                            <div><Button className="btn btn-success" variant="primary" onClick={addToCart}>Add to cart</Button></div>
                            <h4></h4>
                            <div><Link to={`/Cart`} className="btn btn-success">Proceed to checkout</Link></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Summary
                        </label>
                        <Form.Control
                            as="textarea"
                            className="form-control"
                            id="description"
                            rows="8"
                            value={movie.summary}
                            readOnly
                        />
                    </div>
                    <Card style={{ width: '25rem', height: '20rem', margin: '2px' }} className="Card">
                        <Card.Img variant="top" src={`${movie.author.image}`} className="card-image" />
                    </Card>
                    <div className="mb-3">
                        <label htmlFor="biography" className="form-label">
                            Biography
                        </label>
                        <Form.Control
                            as="textarea"
                            className="form-control"
                            id="biography"
                            rows="8"
                            value={movie.author.biography}
                            readOnly
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default MovieDetails;
