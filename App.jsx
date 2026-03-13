

// import { useEffect } from 'react'
// import './App.css'
// import SearchIcon from './search.svg'

// const API_URL= "https://www.omdbapi.com/?apikey=4bbf4965"


// const movie=
// {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_SX300.jpg"
// }


// function App() {

//   const searchMovie=async(title)=>{
//     const response=await fetch(`${API_URL}&s=${title}`);
//     const data=await response.json();
//     console.log(data.Search)
//   }
 
// useEffect(()=>{
// searchMovie("Batman")
// },[])
//   return (
//     <>
//     <div className='app'>
//       <h1>MovieLand</h1>

//       <div className='search'>
//         <input placeholder="search for movies" value="Batman"
//         onChange={()=>{ }}
//         />
//         <img src={SearchIcon} alt="serach" onClick={()=> { }}/>
//       </div>

// <div className='movie'>
//   <div>
//     <p>{movie.Year}</p>
//   </div>
// </div>

// <div>
//   <img src={movie.Poster} alt={movie.Title}/>
// </div>

// <div>
//   <span>{movie.Type}</span>
//   <h3>{movie.Title}</h3>
// </div>

//     </div>
//     </>
//   )
// }

// export default App



import { useState, useEffect } from "react";
import './App.css'
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=4bbf4965";

function App() {
  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);


  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input placeholder="Search for movies"
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

          <img src={SearchIcon} alt="search" onClick={() => searchMovies(serachTerm)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

      </div>
    </>
  )
}

export default App
