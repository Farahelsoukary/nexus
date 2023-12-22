import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchform from "../searchform/searchform";
import Book from "./book";
import loadingCard from "./loadingcard";

const BookDetails = () => {
    const [details, setDetails] = useState([]);
    const [term, setTerm] = useState("Loki");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true);
            const resources = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=11`
            );
            setDetails(resources.data.items);
            setIsLoading(false);
        };
        fetchDetails();
    }, [term]);

    const loadMore = async () => {
        const resources = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=8&startIndex=${details.length}`
        );
        setDetails((oldDetails) => [...oldDetails, ...resources.data.items]);
    };

    return (
        <>
            <h2
                style={{
                    textTransform: "capitalize",
                    color: "#DB4437",
                    fontSize: 40,
                    textAlign: "center",
                    margin: "auto",
                    marginTop: "20px",
                    marginBottom: "10px",
                    // fontFamily: "Scheherazade New",
                }}
            >
                {term}
            </h2>
            <Searchform searchText={(text) => setTerm(text)} />
            {isLoading ? (
                <section className="container" style={{ padding: "2rem 0rem" }}>
                    <loadingCard />
                    <loadingCard />
                    <loadingCard />
                    <loadingCard />
                </section>
            ) : !details ? (
                <h1
                    className="loading-name"
                    style={{
                        background: "white",
                        borderRadius: "1rem",
                        color: "#DB4437",
                        padding: "1rem",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        fontSize: 33,
                        fontFamily: "Inria Serif",
                        transform: "translate(-50%,-50%)",
                        textTransform: "capitalize",
                    }}
                >
                    😞 Couldn't find books about {term}
                </h1>
            ) : (
                <section className="container" style={{ padding: "2rem 0rem" }}>
                    <div className="row">
                        {details.map((book, index) => (
                            <div key={index} className="col-md-3 mb-4">
                                <Book {...book} style={{ height: "400px" }} />
                            </div>
                        ))}
                    </div>
                    <div className="custom-card" style={{backgroundColor: "transparent", fontWeight: "300"}}>
                        <h3 style={{ fontSize: "1.32rem" }}>
                            Don't find what you're looking for?
                        </h3>
                        <h3 style={{ fontSize: "1.21rem"}}>
                            Search for your favorite{" "}
                            <span style={{ color: "black" }}>Genre</span> or{" "}
                            <span style={{  color: "black" }}>Author</span> in
                            the search box!!
                        </h3>
                    
                    <div className="load-more">
                        <button onClick={() => loadMore()}>Load More!</button>
                    </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default BookDetails;
