import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetails from '../bookDetails/bookdetails';
import Book from '../books/books';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/bookdetails/:ISBN" component={BookDetails} />
                <Route path="/books" component={BooksList} />
                {/* Other routes may go here */}
            </Switch>
        </Router>
    );
}

export default Routes;