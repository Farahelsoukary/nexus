import React from "react";
// import { BiLinkExternal } from "react-icons/bi";
import "./style.css"
import { motion } from "framer-motion";
import defaultBook from "../../defaultBook.png.jpg"

const Book = ({ id, volumeInfo }) => {
    const imageVariants = {
        hover: {
            scale: 1.3,
            boxShadow: "0px 0px 3px #000",
            transition: {
                duration: 0.5,
                type: "spring",
                delay: 0.15,
            },
        },
    };
    let { title, authors, publisher, previewLink, imageLinks } = volumeInfo;

    //setting up default values for volume info data
    title = title || "Title is not available";
    authors = authors || "Author(s) name not available";
    publisher = publisher || "Publisher company not available";
    previewLink = previewLink || "https://books.google.co.in/";

    return (
        <section key={id} className="loading-card">
            <div>
                <div>
                    <motion.img
                        src={imageLinks ? imageLinks.thumbnail : defaultBook}
                        width="100px" 
                        alt="Book-cover"
                        variants={imageVariants}
                        whileHover="hover"
                    />
                </div>
                <div>
                    {title && (
                        <div>
                            <h4 className="inline">{title}</h4>
                        </div>
                    )}
                </div>

                <div>
                    {authors && (
                        <h6 style={{fontWeight: "700",color: "#263238" }}>
                            {" "}
                            Author:{" "}
                            <span
                                style={{
                                    fontWeight: "400",
                                    color: "#263238",
                                }}
                            >
                                {" "}
                                {authors}{" "}
                            </span>
                        </h6>
                    )}
                </div>

                <div>
                    {publisher && (
                        <h6 style={{fontWeight: "700",color: "#263238" }}>
                            {" "}
                            Published by:{" "}
                            <span
                                style={{
                                    fontWeight: "400",
                                    color: "#263238",
                                }}
                            >
                                {" "}
                                {publisher}{" "}
                            </span>
                        </h6>
                    )}
                </div>

                {/* <div>
                    {previewLink && (
                        <h6
                            style={{
                                fontWeight: "bold",
                                color: "black",
                                paddingBottom: "1rem",
                            }}
                        >
                            {/* Read more :{" "} }
                            <a href={previewLink} target="_blank" rel="noreferrer">
                                {" "}
                                Google Books <BiLinkExternal></BiLinkExternal>{" "}
                            </a>
                        </h6>
                    )}
                </div> */}

                {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            > {language && }
              <p>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  Language :{" "}
                </span>{" "}
                {language}{" "}
              </p>
              <p>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: "1rem",
                  }}
                >
                  {" "}
                  Average Rating :{" "}
                </span>{" "}
                {averageRating}
              </p>
            </div> */}
            </div>
        </section>
    );
};

export default Book;