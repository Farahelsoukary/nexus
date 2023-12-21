import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
class Productcard extends Component {
    constructor() {
        super();
        this.state = {
            productData: {
                Title: 'Iphone-14',
                price: 1200,
                imgpath: "pic.png",
                quantity: 3,
                inStock: true,

            },
            username: "farah"
        };
        console.log('inside the constructor');
    }
    componentDidMount() {
        console.log('inside the componentDidMoun');
    }
    componentDidUpdate() {
        console.log('inside the componentDidupdate');

    }
    componentWillUnmount() {
        //destroy cleanup any thing i dont want
        console.log('inside the componentwillunmount');
    }
    // addToCart = () => {
    //     console.log('function called')
    // if (this.state.productData.quantity > 0) {
    //     this.state.productData.quantity -= 1;
    // }error
    //     this.productData.setState({
    //         quantity: this.state.productData.quantity > 0 ? this.state.productData.quantity - 1 : "out of stock",

    //     });
    // };
    addToCart = () => {
        console.log('function called');
        if (this.state.productData.quantity > 0) {
            this.setState(prevState => ({
                productData: {
                    ...prevState.productData,
                    quantity: prevState.productData.quantity - 1
                }
            }));
        }
    };
    changeName = (newName) => {
        this.setState(prevState => ({
            productData: {
                ...prevState.productData,
                Title: newName
            }
        }));
    };
    render() {
        console.log('inside the render');
        return (
            <>
                <h3 className="myHeader">hello from card component</h3>
                <div className="row">
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={this.state.productData.imgpath} />
                            <Card.Body>
                                {/* binding  */}
                                <Card.Title>{this.state.productData.Title}</Card.Title>
                                <Card.Text>
                                    {this.state.productData.price}$
                                </Card.Text>
                                <div className="row">
                                    <Card.Text>
                                        Avalible: {this.state.productData.quantity} Items
                                    </Card.Text>

                                    <Button variant="primary" onClick={this.addToCart}>Add to cart</Button>
                                    <Button variant="success" onClick={() => this.changeName("Iphone-15 pro max")}>ChangeName</Button>
                                </div>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="pic2.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>


                    </div>

                </div></>
        );
    };
};
export default Productcard;