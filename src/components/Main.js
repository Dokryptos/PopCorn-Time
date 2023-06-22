import "./Main.css"


import Movie from './Movie'


function Main(props){


    return (
        <div className="main">
        <button onClick={props.sortByName}>Filter by Name</button>


            {props.listOfMovies.map((movieObj, index) =>{
                return (
                    
                    <Movie key={index} deleteMovie={props.deleteMovie} id={movieObj.id} genres={movieObj.genres} title={movieObj.title}  imgURL={movieObj.imgURL} rating={movieObj.rating} year={movieObj.year}/>


                )
            })}
        </div>
    )
}
export default Main