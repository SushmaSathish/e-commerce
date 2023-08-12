import React, { useState, useCallback,useEffect } from 'react';
import MovieList from './movieList';
import './AppAPI.css';
import AddMovie from './Addmovie';

const Appapi = () => {
    const[movie,setmovie]=useState([])
    const[isloading,setisloading]=useState(false)
    const [error,setError] = useState(null)
    
    const fetchmoviehandle=useCallback( async  ()=>{
        setisloading(true);
        setError(null);
        try{
            const response= await fetch(
              "https://react-http-f689c-default-rtdb.firebaseio.com/movies.json")
            if(!response.ok){
                throw new Error('Something went wrong')
            }
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
        }
        catch(error){
          setError(error.message)
        }
        setisloading(false)
        },[])
        useEffect (()=>{
          fetchmoviehandle()
          },[fetchmoviehandle])
        async function addMovieHandler(movie) {
           const response = await  fetch("https://react-http-f689c-default-rtdb.firebaseio.com/movies.json",
            {method:'POST', body:JSON.stringify(movie),headers:{
              'Content-Type':'application/json'
            }})
            const data = await response.json();
            console.log(data);

          }
        let content = <p>found no movies</p>;
  if (movie.length > 0) {
    content = <MovieList movies={movie} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isloading) {
    content = <p>loading....</p>;
  }
  return (
    <React.Fragment>
        <section>
        <AddMovie onAddMovie={addMovieHandler} />
        </section>
        <section>
        <button onClick={fetchmoviehandle}>Fetchmovie</button>
        </section>
        <section>
        {content}
        </section>
         </React.Fragment>
  )
}
export default Appapi;