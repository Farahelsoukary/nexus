import React from "react";
import "./home.css";
import Bookshop from "./Bookshop.gif"
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import { ReactDOM } from "react";

function SearchPage() {
    const containerStyle = {
        minHeight: '70vh',
        // backgroundColor: 'rgb(165, 110, 186)',
        backgroundImage: `url(${Bookshop})`,
        // backgroundSize: "card",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        //margin: "10px"
    };

    return (<>
        <div className="background">
            <h2 className='header-title text-capitalize'>Find a book of your choice.</h2><br />
            <p className='header-text fs-18 fw-6'>Welcome to our Bookstore where the enchanting world of literature meets the convenience of online shopping! Immerse yourself in a virtual realm of captivating stories, timeless classics, and the latest literary treasures—all at your fingertips.

                At our Bookstore, we believe in the power of books to transport, inspire, and transform. Whether you're a seasoned bibliophile or a curious reader eager to explore new realms, our extensive collection has something for everyone. Navigate through our user-friendly website and discover a curated selection of books spanning various genres, from gripping novels and insightful non-fiction to whimsical children's tales.</p>
            <div className="d-flex justify-content-center align-items-center" style={containerStyle}>

                {/* <SearchForm /> */}
            </div>
            {/* <MDBCol md="12">
            {/* <MDBFormInline className="md-form mr-auto mb-4"> */}
            {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
            Search
        </MDBBtn>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn outline color="warning" rounded size="sm" type="submit" className="mr-auto">
            Search
        </MDBBtn>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
            Search
        </MDBBtn> */}
            {/* </MDBFormInline> */}
            {/* </MDBCol> */}
        </div>
    </>
    );
}

export default SearchPage;
