import React, { useEffect, useState } from 'react';
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
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/Error';
import { SelectedMovie } from './components/SelectedMovie';

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

export type unionSelect = string | null;

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);
  const [watched, setWatched] = useState<Watched[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSelected, setIsSelected] = useState<unionSelect>(null);

  const handleCloseDetails = () => {
    setIsSelected(null);
  }

  const handleSelectMovie = (id: unionSelect) => {
    setIsSelected((isSelected) => (id === isSelected ? null : id));
  }

  const handleAddWatchedMovie = (movie: any) => {
    setWatched(watched => [...watched, movie]);
  }

  const handleDeleteWatch = (id: string) => {
    setWatched(watched => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    async function getData() {
      try{
        setIsLoading(true);
        const res = await fetch(`https://www.omdbapi.com/?apikey=933a888b&s=${query}`)
        if(!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        if(data.Response === 'False') {
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
        setError('')
      } catch(err) {
        setError((err as Error).message);
      }
      setIsLoading(false);
  }
  if(!query && query.length < 3) {
    setError('')
    return
  }
  getData();
  },[query])

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
          {error !== '' ? <ErrorMessage message={error} /> : isLoading ? <Loader/> : <MovieList movies={movies} onSelect={handleSelectMovie} />}
        </ListBox>
        <ListBox>
        {isSelected !== null ?
          <SelectedMovie watched={watched} movieId={isSelected} onCloseMovie={handleCloseDetails} onAddToFavorites={handleAddWatchedMovie} />
         :
          <>
            <Summary watched={watched} />
            <WatchedList watched={watched} onRemoveWatch={handleDeleteWatch} />
          </>
        }
        </ListBox>
      </Main>
    </>
  );
}

export default App;
