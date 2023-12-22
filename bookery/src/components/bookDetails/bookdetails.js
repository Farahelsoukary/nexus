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
        <div className="container" style={{width: "80%" , border: "2px solid #fd4930", borderRadius: "25px", backgroundColor: "white"}}>
            {/* ,marginTop: "20px", marginBottom: "20px",flexWrap: "nowrap",display: "flex", flexDirection: "row",alignContent: "center", justifyContent: "space-between" */}
            <Row md-6 lg-6 xl-6 >
                <Col className= "md-4 lg-5 xl-5 col" style={{border: "0px"}}>
                    <Card  style={{width: '400px', margin: '12px', border: "0px" }} >
                        <Card.Img variant="top"  src={`${movie.image}`} className="card-image Card" />
                        <Card.Body>
                            <Card.Title style={{fontSize: "26px" , color: "#263238", fontWeight: "500"}}>{movie.title}</Card.Title>

                            <Card.Text style={{ color: "#263238", marginTop: '5px', fontWeight: "400", fontSize: "20px" ,marginLeft: "35px",textAlign: "left"}} >
                                Available: {productData.quantity} Items
                            </Card.Text>

                            <Card.Text style={{ color: "#263238", marginTop: '5px', fontWeight: "400", fontSize: "20px", textAlign: "left", marginLeft: "35px", marginBottom: "15px"}}>
                                Price: {movie.price.value} dollar
                            </Card.Text>

                            <div><Button className="btn btn-success" variant="primary" onClick={addToCart} style={{ marginTop: "15px", color: "white", backgroundColor: "#fd4930", width: "300px", fontSize: "18px", margin: "auto"}}>Add to cart</Button></div>
                            <h4></h4>
                            <div><Link to={`/Cart`} className="btn btn-success" style={{ marginTop: "5px", color: "white", backgroundColor: "#fd4930", width: "300px", fontSize: "18px", margin: "auto"}}>Proceed to checkout</Link></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className= "md-4 lg-8 xl-8 col" style={{ margin: '12px'}}>
                    <div >
                        {/* <label htmlFor="description" className="form-label" style={{fontSize: "32px" , color: "#fd4930", fontWeight: "600"}}>
                            Book Details
                        </label> */}

                        <Card style={{ width: '100px', height: '100px', margin: "auto", marginBottom: "2%"}} >
                        <Card.Img variant="top" src={`${movie.author.image}`} className="card-image" />
                    </Card>
                    <label style={{fontSize: "20px" , fontWeight: "400", marginBottom: "5%"}}><span style={{fontWeight: "500"}}>Author: </span>{movie.author.name}</label>
                        {/* <Form.Control
                            as="textarea"
                            className="form-control"
                            id="description"
                            rows="15"
                            value={movie.summary}
                            readOnly
                        /> */}
                        <h4 style={{textAlign: "left"}}>Book Summary</h4>
                        <p style={{textAlign: "left", fontSize: "16px" , marginBottom: "5%"}}>{movie.summary}</p>
                    </div>
                    
                    <div className="mb-3">
                    <h4 style={{textAlign: "left"}}>Biography</h4>
                    <p style={{textAlign: "left", fontSize: "16px" , marginBottom: "5%"}}>{movie.author.biography}</p>
                        {/* <label htmlFor="biography" className="form-label">
                            Biography
                        </label> */}
                        {/* <Form.Control
                            as="textarea"
                            className="form-control"
                            id="biography"
                            rows="8"
                            value={movie.author.biography}
                            readOnly
                        /> */}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default MovieDetails;
