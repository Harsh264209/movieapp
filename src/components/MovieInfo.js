


function MovieInfo(props){




return(  
    




<div className="container">
<div className="img-container">
<img src={props.img} alt="" />

</div>


<div className="info-container">
  <h1>{props.title} </h1>
  <h5> {props.year}</h5>
 <p>{props.plot}</p>
 <h5>Actors: {props.actors}</h5>
 <h5>Director: {props.director}</h5>
 <h5>Earnings: {props.boxoffice}</h5>
<h6 id="rating">IMDB Rating: {props.imdb}</h6>
<span><h3>🏆</h3>{props.awards}</span>

 
</div>

    </div>

)


}

export default MovieInfo;