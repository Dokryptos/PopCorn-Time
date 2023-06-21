import './Main.css'

function Movie(props){
    return(
        <div key={props.id} className="card">

        {props.imgURL 
        ? <img src={props.imgURL} />
        : <img src="https://dummyimage.com/182x268/ffffff/000000" />
        }



        <h1>{props.title}</h1>
        <p>{props.rating}</p>

        {props.genres.map((e) => {

            return <li>{e}</li>
        })}

        { props.rating > 8 && <p>THIS MOVIE IS AMAZING</p>}

        <p>{props.year}</p>
        <button onClick={ () => {props.deleteMovie(props.id)}} className="btn-delete">delete</button>

    </div>
    )
}

export default Movie