import React, { useState } from 'react';
const Appapi = () => {

    const[movie,setmovie]=useState([])

    async function fetchmoviehandle(){

     const response= await fetch("https://swapi.dev/api/films/") 

     const data=await response.json()

        const transformedmovies=data.results.map(movied=>{

                return{

                    id:movied_episode_id,

                    title:movied.title,

                    opening:movied.opening_crawl

                }

            })

           setmovie(transformedmovies);

        }




  return (

    <React.Fragment>

        <section>

        <button onClick={fetchmoviehandle}>fetchmovie</button>

        </section>

        <section>

            <moviesList movies={movie}/>

        </section>

         </React.Fragment>

  )

}




export default Appapi