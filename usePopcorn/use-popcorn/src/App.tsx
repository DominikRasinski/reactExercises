import React, { useState } from 'react';
import { tempMovieData, tempWatchedData } from './data';
import { Navbar } from './components/navbar/NavBar';
import { Logo } from './components/navbar/Logo';
import { Search } from './components/navbar/Search';
import { Results } from './components/navbar/Results';
import { Main } from './components/Main';
import { ListBox } from './components/ListBox';
import { MovieList } from './components/MovieList';
import { WatchedList } from './components/WatchedList';
import { Summary } from './components/Summary';

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
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <ListBox>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </ListBox>
      </Main>
    </>
  );
}

export default App;
