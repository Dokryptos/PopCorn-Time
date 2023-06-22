import { useEffect, useState } from "react";
import "./Header.css"
import axios from "axios";

function Header(props){

    const baseURL = 'https://ih-crud-api.herokuapp.com'
    let [numberOfCharacters, setNumberOfCharacters] = useState(0);
    
    
    
    useEffect(() => {
    axios.
        get(baseURL + "/characters")
        .then((response) =>{
            
            setNumberOfCharacters(response.data.length)
        })
        .catch((e) => console.log(e));
    })


   let message = "";
   if(props.lengthOfMovies > 0){
       message = <h1>Number of movies: {props.lengthOfMovies}</h1>;
   } else {
       message = <h1>Sorry, no movies to display</h1>;
   }


   return(
   <header className="Header">
        <h2>{message}</h2>
        <h2>Number of API : {numberOfCharacters}</h2>
  </header>
   )
}
export default Header