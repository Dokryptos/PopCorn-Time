import { useState } from "react"


function AddMovie(props){
    
    const [title, setTitle] = useState("") 
    const [rating, setRating] = useState(5) 
    const [imgURL, setImgURL] = useState("") 

    
    const handleSubmit = (e) => {
        e.preventDefault();// avoid page refresh
    
        const newMovie = {
          id: 42,
          title: title,
          year: 2023,
          genres: ['Fun', 'Famillial'],
          rating: rating, 
          imgURL: imgURL,
        }
        
        props.callBackCreate(newMovie);
    
        // Clear form
        setTitle('');
        setRating('');
        setImgURL('');
      }




    return(
        <section>
        <form onSubmit={handleSubmit}>

            <label>
            Title : 
              <input 
              type='text' 
              name='title' 
              placeholder=' Enter the title' 
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
              />
            </label>

            <label>
            Rating : 
              <input 
              type='number' 
              name='rating' 
              placeholder=' Enter the rating ' 
              value={rating}
              required={true}
              min={0}
              max={10}
              onChange={(e) => {setRating(e.target.value)}}
              />
            </label>

            <label>
            Title : 
              <input 
              type='text' 
              name='imgUrl' 
              placeholder=' Enter the Url of Image' 
              value={imgURL}
              onChange={(e) => {setImgURL(e.target.value)}}
              />
            </label>

            <button> Submit </button>

        </form>
      </section>
    )
}

export default AddMovie