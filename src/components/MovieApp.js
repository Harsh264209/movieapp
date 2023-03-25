import { useRef, useState } from 'react';
import MovieInfo from'../components/MovieInfo'
import pic1 from '../logo.jpg'



function MovieApp(){

 const [loader,setLoader]=useState(false)

    let searchInput=useRef();
    
    let [info,setInfo]=useState([])


const searchMovie=()=>{

  let Api="https://www.omdbapi.com/?apikey=81b38455&t=";

     setLoader(true)

    fetch(Api + searchInput.current.value).then(function(response){
  
    return response.json();
      })
    
     .then(function(data){   

setLoader(false)

let moviearray=[]

      let movie={ 
        title:data.Title,
        year:data.Year,
        plot:data.Plot,
        actors:data.Actors,
        director:data.Director,
        boxoffice:data.BoxOffice,
        imdb:data.imdbRating,
        awards:data.Awards,
        poster:data.Poster,
      }
  
      moviearray.push(movie);
      setInfo(moviearray)

console.log(moviearray)


    console.log(data)
     })



}


    return(  

      <div className="div">
       
      
      <img src={pic1} alt="" />

      <div className="main-container">

      <div className="input">

<input type="text" ref={searchInput} placeholder='Search Movie Name' /><button onClick={searchMovie}>Search</button>




</div>
<div className={loader== true ? 'loader':''}>

      </div>
      
     
     
      </div>
      
      
      
       
        

       

        



<div className="div">




{/* 
<div className="container-sm my-5 px-5">
  

<div className="input-group mb-3">
  <input type="text" className="form-control" ref={searchInput}   placeholder="Enter any movie" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" onClick={searchMovie}   type="button" id="button-addon2">Search Movie</button>
</div>
</div> */}

<div className="container">

{

    info.map((movie)=>{

      return <MovieInfo title={movie.title} year={movie.year}   img={movie.poster} plot={movie.plot} actors={movie.actors}  director={movie.director}  boxoffice={movie.boxoffice} imdb={movie.imdb} awards={movie.awards}/>
    })
}

</div>



 </div>


      </div>



       
       



    )
}


export default MovieApp;