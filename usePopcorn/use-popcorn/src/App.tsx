import React, { useState } from 'react';
import { tempMovieData, tempWatchedData } from './data';
import { Navbar } from './components/navbar/NavBar';
import { Logo } from './components/navbar/Logo';
import { Search } from './components/navbar/Search';
import { Results } from './components/navbar/Results';
import { Main } from './components/Main';

export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type Watched = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
};

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <Navbar>
        <Logo />
        <Search
          query={query}
          setQuery={setQuery}
        />
        <Results movies={movies} />
      </Navbar>
      <Main
        movies={tempMovieData}
        watched={tempWatchedData}
        isOpen1={isOpen1}
        isOpen2={isOpen2}
        setIsOpen1={setIsOpen1}
        setIsOpen2={setIsOpen2}
      />
    </>
  );
}

export default App;
