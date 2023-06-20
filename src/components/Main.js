import "./Main.css"
import movies from "../data/movies.json"
import { useState } from "react";

function Main(props){


    const [movie, setMovies] = useState(movies);

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

        {message}

            {movies.map((movieObj) =>{
                return (
                    <div key={movieObj.id} className="card">

                        {movieObj.imgURL 
                        ? <img src={movieObj.imgURL} />
                        : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }



                        <h1>{movieObj.title}</h1>
                        <p>{movieObj.rating}</p>

                        { movieObj.rating > 8 && <p>THIS MOVIE IS AMAZING</p>}

                        <p>{movieObj.year}</p>
                        <button onClick={ () => {deleteMovie(movieObj.id)}} className="btn-delete">delete</button>
                
                    </div>
                )
            })}
        </div>
    )
}
export default Main