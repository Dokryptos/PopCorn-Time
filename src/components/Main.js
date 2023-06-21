import "./Main.css"
import movies from "../data/movies.json"

import Movie from './Movie'
import { useState } from "react";

function Main(props){

    
    const [movie, setMovies] = useState(movies);

    const sortByName = () => {
        const compareByName = [...movie].sort((a, b) => a.title.localeCompare(b.title))
        setMovies(compareByName)
    }



    console.log(movie);
    const deleteMovie = (movieId) => {
        console.log(movieId);
        const filteredMovie = movie.filter((element) => {
            return element.id !== movieId
        });
    setMovies(filteredMovie);
    }

    let message = "";
    if(movie.length > 0){
        message = <h1>Number of movies: {movie.length}</h1>;
    } else {
        message = <h1>Sorry, no movies to display</h1>;
    }

    return (
        <div className="main">
        <button onClick={sortByName}>Filter by Name</button>

        {message}

            {movie.map((movieObj) =>{
                return (
                    
                    <Movie deleteMovie={deleteMovie} id={movieObj.id} genres={movieObj.genres} title={movieObj.title}  imgURL={movieObj.imgURL} rating={movieObj.rating} year={movieObj.year}/>


                )
            })}
        </div>
    )
}
export default Main