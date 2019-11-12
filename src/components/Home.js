import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from "../config";

// import Components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

const Home = () => {
  const [state, setState] = useState({movies: []});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(state);

  const fetchMovies = async endpoint => {
    setError(false);
    loading(true);

    try {
      const response = await (await fetch(endpoint)).json();
      setState(state => ({
        ...state,
        movies: [...response.results],
        heroImage: state.heroImage || response.results[0],
        currentPage: response.page,
        totalPages: response.total_pages
      }));

    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  return(
  <>
    <HeroImage />
    <SearchBar />
    <Grid />
    <MovieThumb />
    <LoadMoreBtn />
    <Spinner />
  </>;
  )};

export default Home;
