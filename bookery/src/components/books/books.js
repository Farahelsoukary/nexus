import React from "react";
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import booksModule from '../booksmodule';

const BookCard = ({ title, author, image, ISBN }) => (
  <section className="loading-card">
    <div>
      <div>
        <img src={image} width="100px" alt="Book-cover" />
      </div>
      <div>
        <div>
          <h3 className="inline">{title}</h3>
        </div>
      </div>
      <div>
        <h4 style={{ paddingBottom: "1rem", color: "black" }}>
          Author: <span style={{ fontWeight: "bold", color: "#3b3b3b" }}>{author.name}</span>
        </h4>
      </div>

      <div>
        <h5 style={{ fontWeight: "bold", color: "black", paddingBottom: "1rem" }}>
          <Link to={`/bookDetails/${ISBN}`}>See Details</Link>
        </h5>
      </div>
    </div>
  </section>
);

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksModule.books,
      islogin: false,
    };
  }

  loginFunc = () => {
    this.setState({
      islogin: !this.state.islogin,
    });
  };

  render() {
    return (
      <>
        {/* <button className="btn btn-primary m-3" onClick={this.loginFunc}>
          {this.state.islogin ? 'logout' : 'login'} */}
        {/* </button> */}
        {/* {this.state.islogin ? ( */}
        <div className="container mt-5">
          <div className="row">
            {this.state.books.map((book) => (
              <div key={book.ISBN} className="col-md-4 mb-4">
                <BookCard {...book} />
              </div>
            ))}
          </div>
        </div>
        {/* ) : ( */}
        {/* <h1>Please Login First</h1> */}
        {/* ) */}
        {/* } */}
      </>
    );
  }
}

export default Movies;
