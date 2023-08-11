import React, { useState } from 'react';
import MovieList from './movieList';
import './AppAPI.css';
const Appapi = () => {
    const[movie,setmovie]=useState([])
    const[isloading,setisloading]=useState(false)

    async function fetchmoviehandle(){
        setisloading(true)
     const response= await fetch("https://swapi.dev/api/films/") 
     const data=await response.json()
        const transformedmovies=data.results.map(moviedata=>{
                return{
                    id:moviedata.episode_id,
                    title:moviedata.title,
                    openingText:moviedata.opening_crawl,
                    releaseDate:moviedata.release_date
                }
            })
           setmovie(transformedmovies);
           setisloading(false)
        }
  return (
    <React.Fragment>
        <section>
        <button onClick={fetchmoviehandle}>Fetchmovie</button>
        </section>
        <section>
        {!isloading &&movie.length>0 &&<MovieList movies={movie}/>}
        {!isloading &&movie.length===0&&<p>no movies to show</p>}
        {isloading  &&<p>loading.........</p>}
        </section>
         </React.Fragment>
  )
}
export default Appapi;