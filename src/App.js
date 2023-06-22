import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import movies from "./data/movies.json"
import { useState } from "react";
import AddMovie from './components/AddMovie';

function App() {

  const [movie, setMovies] = useState(movies);

const createMovie = (newMovie) => {
  const newList = [newMovie,...movie]; 
  setMovies(newList);
}



  const deleteMovie = (movieTitle) => {
      const filteredMovie = movie.filter((element) => {
          return element.title !== movieTitle
      });
      setMovies(filteredMovie);
  }


  const sortByName = () => {
    const compareByName = [...movie].sort((a, b) => a.title.localeCompare(b.title))
    setMovies(compareByName)
  }

  

  
  return (
    <div className="App">
      <Header lengthOfMovies={movie.length} setMovies={setMovies}/>
      
      <AddMovie callBackCreate={createMovie} listMovie={movie} setMovies={setMovies} />

      <Main sortByName={sortByName} deleteMovie={deleteMovie} listOfMovies={movie} setMovies={setMovies}/>

      <Footer />
    </div>
  );
}

export default App;
