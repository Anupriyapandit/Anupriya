import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

// API Key for The Movie Database API
const API_KEY = 'YOUR_TMDB_API_KEY'; 

function App() {
  const [movies, setMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    // Fetch Netflix Originals
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_networks=213`)
      .then(response => {
        setMovies(response.data.results);
        setBannerMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {bannerMovie && <Banner movie={bannerMovie} />}
      <Row title="Trending Now" movies={movies} />
      <Row title="Top Rated" movies={movies} />
      <Row title="Action Movies" movies={movies} />
      <Row title="Comedy Movies" movies={movies} />
      <Row title="Horror Movies" movies={movies} />
      <Row title="Romance Movies" movies={movies} />
    </div>
  );
}

export default App;
