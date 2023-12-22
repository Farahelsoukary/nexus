import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Productcard from './components/product/card';
import Tvshow from './components/tvshow/tvshow';
import SignUp from './components/signup/signup';
import About from './components/about/about';
import Contact from './components/contact/contact';
import SearchPage from './components/home/home';
import PageNotFound from './components/PageNotFound/pageNotFound';
import Login from './components/login/login';
import MovieDetails from './components/bookDetails/bookdetails';
import Book from './components/bookList/books';
import BookList from './components/bookList/bookList';
import Movies from './components/books/books';
import YourComponent from './bookapis';
import Cart from './components/cart/cart';
import BookDetails from './components/tvshow/tvshow';
//jsx
//camel case y3ny babd2 el kelma b harf small w el mkt3 el tani b 7arf captial zy className
function App() {
  return (
    <div className="App" style={{}}>

      <Header />
      {/* <SignUp /> */}
      {/* <Movie /> */}
      {/* <Tvshow /> */}
      {/* <Productcard /> */}
      {/* <Routes>
        <Route path="/" element={<Nome />} />
        <Route path="/tv" element={<Tvshow />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/join" element={<Joinus />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />



      </Routes> */}
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/tv" element={<Tvshow />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tvshow" element={<BookDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/book" element={<Movies />} />
        <Route path="/bookdetails/:ISBN" element={<MovieDetails />} />
        <Route path="/Cart" element={<Cart />} />


        <Route path="/login" element={<Login />} />
        {/* <Route path="" element={<Login />} /> */}
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} />
        {/* </Route> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer/>
    </div>
  );
}

export default App;
