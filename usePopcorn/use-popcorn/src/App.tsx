import React, { useState } from 'react';
import { tempMovieData, tempWatchedData } from './data';
import { Navbar } from './components/NavBar';
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

const average = (arr: any) =>
  arr.reduce(
    (acc: any, cur: any, i: any, arr: any) => acc + cur / arr.length,
    0
  );

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <Navbar
        movies={tempMovieData}
        setQuery={setQuery}
        query={query}
      />
      <Main
        movies={tempMovieData}
        watched={tempWatchedData}
        isOpen1={isOpen1}
        isOpen2={isOpen2}
        setIsOpen1={setIsOpen1}
        setIsOpen2={setIsOpen2}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
    </>
  );
}

export default App;
