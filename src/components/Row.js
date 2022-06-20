import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


export default function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
            fetchData();
    },[fetchUrl])


    const opts = {
        height: "400",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };
    
    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('');
        } else{
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then(url=>{
                const urlParams =new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(e=>console.log(e))
        }
    }

    console.log(movies);

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row__posters">
        {movies.map(movie =>
        (  
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)
        )   && 
                (
                    <div className='single__movie' onClick={()=>handleClick(movie)}> 
                    
                    <img 
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key = {movie.id}
                    
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name} />
                    
                    <div className='overlay'>
                        <div className="showMovieTitle">
                        {movie?.title || movie?.name || movie?.original_name}
                        </div>
                    </div>

                    </div>
                )
                
                )
        }
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}
