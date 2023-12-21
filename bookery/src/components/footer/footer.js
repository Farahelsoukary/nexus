import React, { Component } from "react";
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <><article className="all-browsers">
                <h1>Most Popular Browsers</h1>
                <article className="browser">
                    <h2>Google Chrome</h2>
                    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
                </article>
                <article className="browser">
                    <h2>Mozilla Firefox</h2>
                    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
                </article>
                <article className="browser">
                    <h2>Microsoft Edge</h2>
                    <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
                </article>
            </article><footer>
                    <p>Author: Hege Refsnes
                        <a href="mailto:hege@example.com">hege@example.com</a></p>
                </footer></>);
    }

}
export default Footer;